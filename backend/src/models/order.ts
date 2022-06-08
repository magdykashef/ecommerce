import Client from '../database';

enum order_status { active, completed, cancelled }
export type Order = {
    id?: number;
    pId: number;
    order_status: order_status;
    user_id: string;
    quantity: number;
}

export class OrderStore {
    // list of all orders per user
    async index(id:string): Promise<Order[]> {
        try {
            
            const conn = await Client.connect();

            const sql = 'SELECT * FROM orders WHERE user_id=($1)';

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
            
            const sql = 'SELECT * FROM orders WHERE _id=($1)';
            
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
            const sql = 'INSERT INTO orders (_quantity, user_id, _order_status, _pid) VALUES($1,$2,$3,$4) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [order_status[0], o.user_id, o.pId, o.quantity]);
        
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
                'UPDATE orders SET _quantity=($2), _order_status=($3), _pid=($4) WHERE id=($1) RETURNING *';
        
            const result = await connection.query(sql, [ o.id, o.quantity, order_status[0], o.pId]);
            
            connection.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to update order with the following error: ${(error as Error).message}`);
        }
    }

    async delete(id: number): Promise<Order> {
        try {
            const sql = 'UPDATE orders SET _order_status=($2) WHERE id=($1) RETURNING *';
        
            const conn = await Client.connect();
        
            const result = await conn.query(sql, [id, order_status[2]]);
            
            conn.release();
            
            return result.rows[0];
        
        } catch (error) {
            throw new Error(`Could not delete order ${id} because: ${(error as Error).message}`);
        }
    }
}