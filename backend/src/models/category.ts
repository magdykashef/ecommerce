import Client from "../database";

export type Category = {
    category_id?: number;
    category_name: string 
};

export class CategoryStore {
    async index():Promise<Category[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM categories;'
            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (error) {
            throw new Error(`unable to get categories: ${(error as Error).message}`);
        }
    }

    //bring me category by id
    async show(category_id:number):Promise<Category>{
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM categories WHERE category_id=($1)';
            const result = await conn.query(sql, [category_id])    
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`unable to get the category: ${(error as Error).message}`);
        }
    }

    async filter(category_name:string):Promise<Category>{
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM categories WHERE category_name=($1)';
            const result = await conn.query(sql, [category_name])    
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`unable to get the category: ${(error as Error).message}`);
        }
    }
    /*
    async filter(category_id:number, category_name:string):Promise<Category | undefined>{
        try {
            if(category_id) {
                const conn = await Client.connect();
                const sql = 'SELECT * FROM categories WHERE category_id=($1)';
                const result = await conn.query(sql, [category_id])    
                conn.release();
                return result.rows[0]
            } 
            if(category_name) {
                const conn = await Client.connect();
                const sql = 'SELECT * FROM categories WHERE category_name=($1)';
                const result = await conn.query(sql, [category_name])    
                conn.release();
                return result.rows[0]
            } 
            }catch (error) {
            throw new Error(`unable to get the category: ${(error as Error).message}`);
        }
    }*/

    //Create a category
    async create(c:Category): Promise<Category>{
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO categories (category_name) VALUES($1) RETURNING category_id, category_name';
            const result = await conn.query(sql, [
                c.category_name
                ])
            const order = result.rows[0];
            conn.release()
            return order
        } catch (error) {
            throw new Error( `Cannot create an category (${ c.category_id}): ${(error as Error).message}`);
        }
    }


    //update the category 
    async update(c:Category):Promise<Category> {
        try {
            const conn = await Client.connect();
            const sql =
            'UPDATE categories SET category_name=($2) WHERE category_id=($1) RETURNING *';
            const result = await conn.query(sql, [
                c.category_id,
                c.category_name
            ]);

            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(
                `Failed to update ${c.category_name}: ${(error as Error).message}`);
        }
    }

    async delete(id: number): Promise<Category> {
        try {      
            const conn = await Client.connect();
            const sql =
                'DELETE FROM categories WHERE category_id=($1)';
            const result = await conn.query(sql, [id]);        
            const category = result.rows[0];
        
            conn.release();
            return category;
            } catch (error) {
            throw new Error(`unable delete category: ${(error as Error).message}`);
            }
        }
}