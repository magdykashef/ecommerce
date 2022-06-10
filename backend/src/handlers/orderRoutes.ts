import express, { Request, Response, NextFunction } from 'express';

import { createOrderValidator, validationMiddleware } from '../middleware/orderValidation';

import verifyAuthToken from '../middleware/verify';
import { OrderStore } from '../models/orders';

const store = new OrderStore();

const index = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await store.index();
    return res.json({
      statusCode: 200,
      data: orders,
      messageData: 'orders retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await store.show(req.params.id as unknown as string);
    return res.json({
      statusCode: 200,
      data: order,
      messageData: 'order retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const now = new Date(new Date().toUTCString())
    const newOrder = await store.create({ ...req.body, order_date: now});

    return res.json({
      statusCode: 201,
      data: newOrder,
      messageData: 'Order created successfully',
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedOrder = await store.update(req.body);

    return res.json({
      statusCode: 200,
      data: updatedOrder,
      messageData: 'Order updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await store.delete(req.params.id as unknown as string);
    return res.json({
      statusCode: 200,
      data: order,
      messageData: 'order deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const userRoutes = (app: express.Application) => {
  app.get('/orders', verifyAuthToken, index);
  app.get('/orders/:id', verifyAuthToken, show);
  app.post('/orders', createOrderValidator(), validationMiddleware, create);
  app.delete('/orders/:id', verifyAuthToken, destroy);
  app.put('/orders/:id',verifyAuthToken, createOrderValidator(), validationMiddleware, update);
};

export default userRoutes;
