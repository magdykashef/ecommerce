import Client from "../../database";
import { ProductReview, ProductReviewStore } from "../../models/productReview";

const store = new ProductReviewStore();

describe('Review Product Model',async () => {
    describe('Testing CRUD methods', ()=>{
        const productReview: ProductReview = {
            comment: 'bla bla bla',
            rating:5, 
            user_id:'1',
            product_id:1
        }
        async function createReview(productReview:ProductReview) {
            return store.create(productReview)
        }
        async function deleteReview(review_id: number) {
            return store.delete(review_id)
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
    })    
})