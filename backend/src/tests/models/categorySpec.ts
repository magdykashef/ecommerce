import { Category, CategoryStore } from "../../models/category";
import Client from '../../database'

const store = new CategoryStore();

describe('Category Model', () => {
    describe('Testing CRUD methods', ()=>{
        it('MUST have an index method',()=> {
            expect(store.index).toBeDefined();
        })

        it('MUST have a show method', ()=> {
            expect(store.show).toBeDefined();
        })

        it('MUST have a create method', ()=> {
            expect(store.create).toBeDefined();
        })

        it('MUST have an update method', ()=> {
            expect(store.update).toBeDefined();
        })

        it('MUST have a delete method', () => {
            expect(store.delete).toBeDefined();
        })
    })

    const category:Category = {
        category_name: 'pens',
        product_id:'1'
    };
    let categoryid: unknown
    let cato: Category;  
    beforeAll(async () => {
        const ctegory = await store.create(category);
        categoryid = ctegory.category_id;
    });
    
    afterAll(async () => {
        const conn = await Client.connect();
        const sql = 'DELETE FROM categories';

        await conn.query(sql)
        conn.release();
    })

    it('MUST create a new category',async () => {
        cato = await store.create({
            category_name: 'cds',
            product_id:'1'
        } as Category);

        expect(cato).toEqual({
            category_name: 'cds',
            product_id:'1'
        } as unknown as Category)
    })

    it('Must return All categories',async () => {
        const categories = await store.index();
        expect(categories.length).toEqual(2)
    })

    it('Must return a certain category by id',async () => {
        const categoryByID = await store.show(cato.category_id as number);
        expect(categoryByID.category_name).toEqual(cato.category_name);
    })

    it('Must return a category by name',async () => {
        const categoryByName = await store.filter(cato.category_name as string);
        expect(categoryByName.category_name).toEqual(cato.category_name);
    })

    it('Must update the category',async () => {
        const updateCategory = await store.update({
            category_id:categoryid as number,
            category_name: 'phones',
            product_id:'1'
        });
        expect(updateCategory.category_id).toEqual(categoryid as number);
        expect(updateCategory.category_name).toEqual('phones')
    })

    it('Must delete a category',async () => {
        const deleteCategory = await store.delete(categoryid as number);
        expect(deleteCategory.category_id).toEqual(categoryid as number)
    })
})