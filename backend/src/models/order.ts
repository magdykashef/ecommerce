import Client from '../database';

enum order_status { active, completed, cancelled }
export type Order = {
    order_id?: number;
    order_status?: order_status;
    user_id: string;
    quantity: number;
    order_date?: Date;
}

export class OrderStore {
    // list of all orders per user
    async index(id:string): Promise<Order[]> {
        try {
            
            const conn = await Client.connect();

            const sql = 'SELECT order_status, quantity, order_date FROM orders WHERE user_id=($1)';

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
            
            const sql = 'SELECT order_status, quantity, order_date FROM orders WHERE order_id=($1)';
            
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
            const sql = 'INSERT INTO orders (user_id, order_status, quantity) VALUES($1,$2,$3) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [ o.user_id, order_status[0], o.quantity ]);
        
            const order = result.rows[0];
        
            conn.release();
        
            return order;
    
        } catch (error) {
            throw new Error(`Could not add new order ${o}.${(error as Error).message}`);
        }
    }
    
    
    async update(o: Order): Promise<Order> {
            
        try {
    
            const connection = await Client.connect();
            
            const sql =
                'UPDATE orders SET quantity=($2) WHERE order_id=($1) RETURNING *';
        
            const result = await connection.query(sql, [ o.order_id, o.quantity ]);
            
            connection.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to update order with the following error: ${(error as Error).message}`);
        }
    }

    async delete(id: number): Promise<Order> {
        try {
            const sql = 'UPDATE orders SET order_status=($2) WHERE order_id=($1) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [id, order_status[2]]);
            
            conn.release();
            
            return result.rows[0];
        
        } catch (error) {
            throw new Error(`Could not delete order ${id} because: ${(error as Error).message}`);
        }
    }
}