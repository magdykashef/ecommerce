import Client from "../../database";
import app  from '../../server'
import { Category, CategoryStore } from "../../models/category";
import supertest from "supertest";

const store = new CategoryStore();
const request = supertest(app);

describe('Category API endpoints', ()=> {
    const category = {
        category_name: 'phones',
        product_id:'1'
    } as Category;

    beforeAll(async () => {
        const createCategory = await store.create(category);
        category.category_id = createCategory.category_id
    });

    afterAll(async ()=> {
        const conn = await Client.connect();
        const sql = 'DELETE FROM categories';
        await conn.query(sql)
        conn.release();
    })

    describe('Test our api crud methods', () => {
        it('Must create a new category',async () => {
            const response = await request
            .post('categories/create')
            .set('Content-type', 'application/json')
            .send({
                category_name:'mobiles',
                product_id:'1'
            } as Category)

            expect(response.status).toBe(200);
            const {category_name, product_id} = response.body.data
            expect(category_name).toBe('mobiles');
            expect(product_id).toBe('1')
        })

        it('Must retun all categories', async()=> {
            const response = await request
            .get('/categories/index')
            .set('Content-type', 'application/json')
            expect(response.status).toBe(200)
            expect(response.body.data.length).toBe(1)
        })

        it('Must get a category by id', async () => {
            const res = await request
            .get(`/categories/show/${category.category_id}`)
            .set('Content-type', 'application/json')
            expect(res.status).toBe(200);
            expect(res.body.data.category_name).toBe('phones');
            expect(res.body.data.product_id).toBe('1');
        });

        it('Must get a category by name', async () => {
            const res = await request
            .get(`/categories/filter/${category.category_name}`)
            .set('Content-type', 'application/json')
            expect(res.status).toBe(200);
            expect(res.body.data.category_name).toBe('phones');
            expect(res.body.data.product_id).toBe('1');
        });

    })
})