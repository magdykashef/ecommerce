import Client from "../../database";
import app  from '../../server'
import { Category, CategoryStore } from "../../models/category";
import supertest from "supertest";

const store = new CategoryStore();
const request = supertest(app);

describe('Category API endpoints', ()=> {
    const category = {
        category_name: 'phones',
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
        it('Must get to create end point',async () => {
            const response = await request
            .post('/categories/create')
            .set('Content-type', 'application/json')
            .send({
                category_name: 'mobiles'
            } as Category)
            expect(response.status).toBe(200)
            const {category_name} = response.body.data
            expect(category_name).toBe('mobiles')
        })
        it('Must get to the end point of all categories', async()=> {
            const response = await request
            .get('/categories/index')
            .set('Content-type', 'application/json')
            expect(response.status).toBe(200)
            expect(response.body.data.length).toBe(2)
        })

        it('Must get to the end point of category by id', async () => {
            const res = await request
            .get(`/categories/show/${category.category_id}`)
            .set('Content-type', 'application/json')
            expect(res.status).toBe(200);
            expect(res.body.data.category_name).toBe('phones');
        });

        it('Must get to the update end point of category', async () => {
            const response = await request
            .put(`/categories/update/${category.category_id}`)
            .set('Content-type', 'application/json')
            .send({
                category_id:category.category_id,
                category_name:'mobiles'
            });
            expect(response.status).toBe(200)

            const{category_name} = response.body.data
            expect(category_name).toBe('mobiles')
        })

        it('Must get to delete end point',async () => {
            const response = await request
            .delete(`/categories/delete/${category.category_id}`)
            .set('Content-type', 'application/json')
            expect(response.status).toBe(200)
            
            expect(response.body.data.category_id).toBe(category.category_id);
            expect(response.body.data.category_name).toBe('mobiles');
        })
    })
})