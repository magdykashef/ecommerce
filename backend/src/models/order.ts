import Client from '../database';

enum order_status { 'pending', 'in review', 'in progress', 'canceled', 'on the way', 'delivered' }
export type Order = {
    order_id?: number;
    order_status?: order_status;
    user_id: string;
    purchase_date?: Date;
    delivery_date?: Date;
}

export class OrderStore {
    // list of all orders per user
    async index(id:string): Promise<Order[]> {
        try {
            
            const conn = await Client.connect();

            const sql = 'SELECT order_status, order_date, delivery_date FROM orders WHERE user_id=($1)';

            const result = await conn.query(sql, [id]);

            conn.release();

            return result.rows;
    
        } catch (error) {
            throw new Error(`Could not find orders.${(error as Error).message}`);
        }
    }
    //an object of the order by id for a given user
    async show(id: number): Promise<Order> {
        try {
            
            const sql = 'SELECT order_status, order_date, delivery_date FROM orders WHERE order_id=($1)';
            
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [id]);
        
            conn.release();
        
            return result.rows[0];
    
        } catch (error) {
            throw new Error(`Could not find order ${id}. ${(error as Error).message}`);
        }
    }

    async create(o: Order): Promise<Order> {
        try {
            const sql = 'INSERT INTO orders (user_id, order_status, delivery_date) VALUES($1,$2,$3,$3) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [ o.user_id, o.order_status, o.delivery_date]);
        
            conn.release();
        
            return result.rows[0];
    
        } catch (error) {
            throw new Error(`Could not add new order ${o}.${(error as Error).message}`);
        }
    }
    
    
    async update(o: Order): Promise<Order> {
            
        try {
    
            const connection = await Client.connect();
            
            const sql =
                'UPDATE orders SET (order_status=($2), delivery_date=($3)) WHERE order_id=($1) RETURNING *';
        
            const result = await connection.query(sql, [ o.order_id, o.order_status, o.delivery_date ]);
            
            connection.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to update order with the following error: ${(error as Error).message}`);
        }
    }

    async delete(id: number): Promise<Order> {
        try {
            const sql = 'DELETE FROM orders WHERE order_id=($1) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [id]);
            
            conn.release();
            
            return result.rows[0];
        
        } catch (error) {
            throw new Error(`Could not delete order ${id} because: ${(error as Error).message}`);
        }
    }

    async addProduct(quantity: number, order_id: number, product_id: number):
        Promise<{ quantity: number, order_id: number, product_id: number }> {
        
        try {
            const sql = 'SELECT * FROM orders WHERE id=($1)';
        
            const conn = await Client.connect();
    
            const result = await conn.query(sql, [order_id]);
    
            const order = result.rows[0];
    
            if (order.status) {
                throw new Error(`Could not add product ${product_id} to order ${order_id} because order status is ${order.status}`);
            }
    
            conn.release();
            
        } catch (error) {
            throw new Error(`${error}`);
        }
    
        try {
            const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';

            const conn = await Client.connect();
    
            const result = await conn.query(sql, [quantity, order_id, product_id]);
    
            const order = result.rows[0];
    
            conn.release();
    
            return order;
        } catch (err) {
            throw new Error(`Could not add product ${product_id} to order ${order_id}: ${err}`);
        }
    }
}