import express, { Request, Response, NextFunction } from 'express';

import { ProductStore } from '../models/product';

import verifyAuthToken from '../middleware/verify';

const store = new ProductStore();


const index = async (_req: Request, res: Response, next: NextFunction) => {

    try {

        const products = await store.index();

        return res.json({
            statusCode: 200,
            data: products,
            messageData: 'products retrieved successfully',
        });

    } catch (error) {
        next(error);
    } 
};

const onSale = async (_req: Request, res: Response, next: NextFunction) => {

    try {

        const products = await store.onSale();
        
        return res.json({
            statusCode: 200,
            data: products,
            messageData: 'On sale products retrieved successfully',
        });

    } catch (error) {
        next(error);
    } 
};

const show = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const product = await store.show(parseInt(req.params.id));
        
        return res.json({
            statusCode: 200,
            data:{ ...product },
            messageData: 'product retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const newProduct = await store.create(req.body);
        
        return res.json({
            statusCode: 200,
            data:{ ...newProduct },
            messageData: 'product created successfully',
        });
        
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const updatedProduct = await store.update(req.body);

        return res.json({
            statusCode: 200,
            data: { ...updatedProduct },
            messageData: 'product created successfully',
        });

    } catch (error) {
        next(error);
    }
}


const destroy = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const deletedProduct = await store.delete(parseInt(req.params.id));
        return res.json({
            statusCode: 200,
            data: { ...deletedProduct },
            messageData: 'product deleted successfully',
        });

    } catch (error) {
        next(error);
    }
};

const productRoutes = (app: express.Application) => {
    app.get('/products/index', index);
    app.get('/products/onsale', onSale);
    app.get('/products/show/:id', show);
    app.post('/products/create', verifyAuthToken, create);
    app.put('/products/update/:id', verifyAuthToken, update);
    app.delete('/products/delete/:id',verifyAuthToken, destroy);
};

export default productRoutes;
