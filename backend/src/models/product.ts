import client from '../database';

export type Product = {
    product_id?: number;
    create_date?: string;
    product_name: string;
    category: string;
    price: number;
    discount: number;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    update_date?: string;
    delete_date?: string;
};

export class ProductStore {
    
    async index(): Promise<Product[]> {
        try {
        
            const conn = await client.connect();
            
            const sql = 'SELECT * from products';
            
            const result = await conn.query(sql);
            
            conn.release();
            
            return result.rows;
            
        } catch (error) {
            throw new Error(`Couldn't find any products ${(error as Error).message}`);
        }
    }

    async onSale(): Promise<Product[]> {
        try {
            
            const conn = await client.connect();
            
            const sql = 'SELECT * from products WHERE discount > 0';
            
            const result = await conn.query(sql);
            
            conn.release();
            
            return result.rows;
            
        } catch (error) {
            throw new Error(`Couldn't find any products on sale ${(error as Error).message}`);
        }
    }

    async show(id: number): Promise<Product> {
        try {
            
            const conn = await client.connect();
            
            const sql = 'SELECT * FROM products WHERE product_id=($1)';
            
            const result = await conn.query(sql, [id]);
            
            conn.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Couldn't find any product with ${id}. ${(error as Error).message}`);
        }
    }
    
    async create(p: Product): Promise<Product> {
        try {

            const conn = await client.connect();
            
            const sql =
                `INSERT INTO products (product_name, category, 
                price, discount, description, image1, 
                image2, image3, image4, image5) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`;

            const result = await conn.query(sql, [
                p.product_name,
                p.category,
                p.price,
                p.discount,
                p.description,
                p.image1,
                p.image2,
                p.image3,
                p.image4,
                p.image5,
            ]);

            conn.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(
                `Couldn't create new product with name : 
                ${p.product_name}. ${(error as Error).message}`
            );
        }
    }

    async delete(id: number): Promise<Product> {
        try {

            const conn = await client.connect();
            
            const sql = 'Update products SET delete_date=($2) WHERE product_id=($1) RETURNING *';
            
            const result = await conn.query(sql, [id, 'CURRENT_TIMESTAMP']);
            
            conn.release();
            
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Couldn't delete product with ${id}. ${(error as Error).message}`);
        }
    }

    async update(p: Product): Promise<Product> {

        try {

            const conn = await client.connect();
            
            const sql =
                `UPDATE products SET (product_name=($2), category=($3), 
                price=($4), discount=($5), description=($6), image1=($7), 
                image2=($8), image3=($9), image4=($10), image5=($11), update_date=($12)) WHERE product_id=($1) RETURNING * `;

            const result = await conn.query(sql, [
                p.product_id,
                p.product_name,
                p.category,
                p.price,
                p.discount,
                p.description,
                p.image1,
                p.image2,
                p.image3,
                p.image4,
                p.image5,
                'CURRENT_TIMESTAMP'
            ]);
            
            conn.release();

            return result.rows[0];

            } catch (error) {
                throw new Error(
                    `Couldn't update product with ${p.product_id}.${(error as Error).message}`);
            }
    }
}
