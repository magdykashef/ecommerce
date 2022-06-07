import express, { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

import { UserStore } from '../models/user';

import config from '../config';

import {
  createUserValidator,
  validationMiddleware,
} from '../middleware/userValidation';

import verifyAuthToken from '../middleware/verify';

const store = new UserStore();

const index = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await store.index();
    return res.json({
      statusCode: 200,
      data: users,
      messageData: 'users retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await store.show(req.params.id as unknown as string);
    return res.json({
      statusCode: 200,
      data: { ...user },
      messageData: 'user retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await store.create(req.body);
    const token = jwt.sign(
      { newUser },
      config.tokenSecret as unknown as string
    );

    return res.json({
      statusCode: 200,
      data: { ...newUser, token },
      messageData: 'User created successfully',
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updateUser = await store.update(req.body);

    return res.json({
      statusCode: 200,
      data: { ...updateUser },
      messageData: 'User updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await store.delete(req.params.id as unknown as string);
    return res.json({
      statusCode: 200,
      data: user,
      messageData: 'user deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await store.authenticate(email, password);
    const token = jwt.sign({ user }, config.tokenSecret as unknown as string);
    if (!user) {
      return res.status(401).json({
        statusCode: 200,
        messageData: 'The user name and password do not match please try again',
      });
    }

    return res.json({
      statusCode: 200,
      data: { ...user, token },
      messageData: 'user authenticated successfully',
    });
  } catch (error) {
    next(error);
  }
};

const userRoutes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, index);
  app.get('/users/:id', verifyAuthToken, show);
  app.post('/users', createUserValidator(), validationMiddleware, create);
  app.delete('/users/:id', verifyAuthToken, destroy);
  app.post('/users/authenticate', authenticate);
  app.patch(
    '/users/:id',
    verifyAuthToken,
    createUserValidator(),
    validationMiddleware,
    update
  );
};

export default userRoutes;
