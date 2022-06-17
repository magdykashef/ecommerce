import { Connection } from "pg";
import Client from "../database";

export type ProductReview = {
    review_id?: number;
    comment:string;
    rating:number,
    user_id?: string;
    product_id?:number;
};
// return comments with their users for a certain product [by id]
// return all review_id and rating with user_id for a certain product
// return all comments from a certain user
// update comment 
// create comment 
// delete comment
export class ProductReviewStore {
//get all comments from a certain product;
    async index(id:number):Promise<ProductReview[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT review_id, comment, rating, user_id, product_id FROM product_reviews WHERE product_id=($1)';
            const result = await conn.query(sql, [id])
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`unable to get product_reviews`)
        }
    }
// return all review_id and rating and user_id for a certain product
    async show(id:number):Promise<ProductReview[]> {
        try {
            const conn = await Client.connect();
            //const sql = 'SELECT u.user_id, p.review_id, p.rating FROM users AS u INNER JOIN product_reviws AS p ON u.user_id = p.user_id WHERE u.user_id=($1)';
            const sql = `SELECT products.product_id, product_reviews.review_id, product_reviews.rating, product_reviews.user_id FROM products INNER JOIN product_reviews ON 
            products.product_id = product_reviews.product_id WHERE products.product_id=($1)`;
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows;
        } catch (error) {
                throw new Error(`unable to get all rating for a certain product ${id}. ${(error as Error).message}`)
        }
    }
// return all comments from a certain user
    async filter(id:number):Promise <ProductReview[]> {
        try {
            const conn = await Client.connect();
            const sql = `SELECT u.user_id, p.review_id, p.rating, p.comment FROM users 
            AS u INNER JOIN product_reviews AS p ON u.user_id = p.user_id WHERE u.user_id=($1);`
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows
        } catch (error) {
            throw new Error(`unable to get all comments and rating for a certain user ${id}. ${(error as Error).message}`);
        }
    }
// create a new review
    async create(r:ProductReview):Promise<ProductReview> {
        try {
            const conn = await Client.connect();
            const sql = `INSERT INTO product_reviews (comment, rating, user_id, product_id, comment) VALUES($1, $2, $3, $4) RETURNING *`
            const result = await conn.query(sql, [r.comment, r.rating, r.user_id, r.product_id]);
            const review = result.rows[0];
            conn.release();
            return review;
        } catch (error) {
            throw new Error(`unable to create a new review ${r}. ${(error as Error).message}`);
        }
    }
// update the review
    async update(r:ProductReview):Promise<ProductReview>  {
        try {
            const conn = await Client.connect();
            const sql =`UPDATE product_reviews SET comment=($2), rating=($3) WHERE review_id=($1) RETURNING review_id, comment, rating, user_id, product_id`;
            const result = await conn.query(sql, [
                r.review_id, 
                r.comment, 
                r.rating
                ])
            conn.release();
            return result.rows[0]
        } catch (error) {
            throw new Error(`unable to update the review ${r}. ${(error as Error).message}`);
        }
    }
// delete the review by id
    async delete(id:number):Promise<ProductReview> {
        try {
            const conn = await Client.connect();
            const sql = `DELETE FROM product_reviews WHERE review_id=($1) RETURNING *`
            const result = await conn.query(sql, [id]);
            const review = result.rows[0];
            conn.release();
            return review
        } catch (error) {
            throw new Error(`unable to delete the review ${id}. ${(error as Error).message}`);
        }
    }
}