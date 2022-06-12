import { Category, CategoryStore } from "../../models/category";
import Client from '../../database'

const store = new CategoryStore();


describe('Category Model', () => {
    describe('Testing CRUD methods', ()=>{
        const category: Category = {
            category_name:'pens'
        }
        async function createCategory(category:Category) {
            return store.create(category)
        }
        async function deleteCategory (category_id: number) {
            return store.delete(category_id)
        }

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

        describe('Test category logic',async () => {
            it('Must create a new category',async () => {
                const createdCategory:Category = await createCategory(category)

                expect(createdCategory).toEqual({
                    category_id:createdCategory.category_id,
                    ...category
                })

                await deleteCategory(createdCategory.category_id as number)
            })

            it('Must get all categories', async()=> {
                const createdCategory:Category = await createCategory(category);
                const categories = await store.index();
                expect(categories).toEqual([createdCategory])

                await deleteCategory(createdCategory.category_id as number)
            })

            it('Must return a certain category by ID',async () => {
                const createdCategory:Category = await createCategory(category);
                const categorShow = await store.show(createdCategory.category_id as number);

                expect(categorShow).toEqual(createdCategory)
                await deleteCategory(createdCategory.category_id as number)
            })

            it('Must delete a certain category', async () => {
                const createdCategory:Category = await createCategory(category);
                await deleteCategory(createdCategory.category_id as number)

                const categoryList = await store.index()
                expect(categoryList).toEqual([])
            })
        })
    })
})