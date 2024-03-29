import express, { Request, Response, NextFunction } from 'express';
import { OrderStore } from '../models/order';

import verifyAuthToken from '../middleware/verify';

const store = new OrderStore();


const index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = await store.index(req.params.id as unknown as string);
        return res.json({
            statusCode: 200,
            data: orders,
            messageData: 'orders retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
    
}

const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderId = Number(req.params.id);
        const order = await store.show(orderId);
        return res.json({
            statusCode: 200,
            data: { ...order },
            messageData: 'order retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
    
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const newOrder = await store.create(req.body);
        return res.json({
            statusCode: 200,
            data: { ...newOrder },
            messageData: 'order created successfully',
        });
    } catch(error) {
        next(error);
    }
}


const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const updateOrder = await store.update(req.body);
        
        return res.json({
            statusCode: 200,
            data: { ...updateOrder },
            messageData: 'order updated successfully',
        });
        
    } catch (error) {
        next(error);
    }
};


const orderRoutes = (app: express.Application) => {
    app.get('/orders/index/:id', verifyAuthToken, index);
    app.get('/orders/show/:id', verifyAuthToken, show);
    app.post('/orders/create/:id', verifyAuthToken, create);
    app.put('/orders/update/:id', verifyAuthToken, update);
}

export default orderRoutes;