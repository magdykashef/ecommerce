import Client from '../database';

enum status { 'pending', 'in review', 'in progress', 'canceled', 'on the way', 'delivered' }
export type Order = {
    order_id?: number;
    status?: status;
    user_id: string;
    purchase_date?: Date;
    delivery_date?: Date;// after 7 day's
}

export class OrderStore {
    // list of all orders per user
    async index(id: string): Promise<Order[]> {
        try {
            
            const conn = await Client.connect();

            const sql = 'SELECT status, purchase_date, delivery_date FROM orders WHERE user_id=($1)';

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
            
            const sql = 'SELECT status, purchase_date, delivery_date FROM orders WHERE order_id=($1)';
            
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
            const sql = 'INSERT INTO orders (user_id, delivery_date, status) VALUES($1,$2,$3) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [o.user_id, 'now() + INTERVAL \'0 year 0 months 7 days \'', status[0]]);
        
            const order = result.rows[0];
        
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
                'UPDATE orders SET status=($2), delivery_date=($3) WHERE order_id=($1) RETURNING *';
        
            const result = await connection.query(sql, [o.order_id, o.status, o.delivery_date]);
            
            connection.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to update order with the following error: ${(error as Error).message}`);
        }
    }
}