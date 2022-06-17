import { ProductReviewStore } from "../models/productReview";
import express, { Request, Response, NextFunction } from 'express';

const store = new ProductReviewStore();

//get all comments from a certain product;
const index =async (req:Request, res:Response, Next:NextFunction) => {
    try {
        const reviews = await store.index(req.params.id as unknown as number);
        return res.json({
                statusCode: 200,
                data: reviews,
                messageData: 'comments retrieved successfully',
        })
    } catch (error) {
        Next(error);
    }
}
// return all review_id and rating and user_id for a certain product
const show =async (req:Request, res:Response, Next:NextFunction) => {
    try {
        const reviews = await store.show(req.params.id as unknown as number);
        return res.json({
                statusCode: 200,
                data: reviews,
                messageData: 'comments retrieved successfully',
        })
    } catch (error) {
        Next(error);
    }
}
// return all comments from a certain user
const filter =async (req:Request, res:Response, Next:NextFunction) => {
    try {
        const reviews = await store.filter(req.params.id as unknown as number);
        return res.json({
                statusCode: 200,
                data: reviews,
                messageData: 'comments retrieved successfully',
        })
    } catch (error) {
        Next(error);
    }
}

// create a new review
const create = async (req: Request, res: Response, Next: NextFunction) => {
        try {        
        const newReview = await store.create(req.body);
        return res.json({
            statusCode: 200,
            data: { ...newReview },
            messageData: 'Review created successfully',
        });
    } catch (error) {
        Next(error);
    }
};
// update the review
const update = async (req: Request, res: Response, Next: NextFunction) => {
    try {
        const updateReview = await store.update(req.body);
    
        return res.json({
            statusCode: 200,
            data: { ...updateReview },
            messageData: 'Review updated successfully',
        });
    } catch (error) {
        Next(error);
    }
};
// delete the review
const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const review = await store.delete(req.params.id as unknown as number);
        return res.json({
            statusCode: 200,
            data: review,
            messageData: 'Review deleted successfully',
        });
        } catch (error) {
        next(error);
    }
}  

const productReviewsRoutes = (app: express.Application) => {
    app.get('/reviews/index/:id', index);
    app.get('/reviews/show/:id', show);
    app.get('/reviews/filter/:id', filter)
    app.post('/reviews/create', create);
    app.delete('/reviews/delete/:id', destroy);
    app.patch('/reviews/update/:id', update);
};

export default productReviewsRoutes;


