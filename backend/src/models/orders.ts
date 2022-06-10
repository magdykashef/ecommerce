import Client from '../database';


export interface Order {
  order_id?: string;
  customer_id: string;
  product_name: string;
  quantity: number;
  total_price: string;
  status: 'PAID' | 'PENDING';
  order_date?: Date;
}



export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`unable get orders: ${(error as Error).message}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const sql =
        'SELECT customer_id, product_name, quantity, total_price, status, order_date FROM orders WHERE order_id=($1)';

      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`unable to show order: ${(error as Error).message}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const conn = await Client.connect();

      const sql =
        'INSERT INTO orders (customer_id, product_name, quantity, total_price, status, order_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';

      const result = await conn.query(sql, [
        o.customer_id,
        o.product_name,
        o.quantity,
        o.total_price,
        o.status,
        o.order_date,
      ]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (error) {
      throw new Error(
        `unable create order for product (${o.product_name}): ${(error as Error).message}`
      );
    }
  }

  async update(o: Order): Promise<Order> {
    try {
      const conn = await Client.connect();

      const sql =
        'UPDATE orders SET product_name=($2), quantity=($3), total_price=($4), WHERE order_id=($1) RETURNING *';

      const result = await conn.query(sql, [
        o.order_id,
        o.product_name,
        o.quantity,
        o.total_price,
      ]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update order for product ${o.product_name} with the following error: ${
          (error as Error).message
        }`
      );
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const conn = await Client.connect();

      const sql =
        'DELETE FROM orders WHERE order_id=($1) RETURNING *';

      const result = await conn.query(sql, [id]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (error) {
      throw new Error(`unable delete order: ${(error as Error).message}`);
    }
  }
}
