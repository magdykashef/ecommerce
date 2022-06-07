import { NextFunction, Request, Response } from 'express';

interface Error {
  name?: string;
  stack?: string;
  message?: string;
  status?: number;
}

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.status || 500;
  const messageData = error.message || 'Whoops!! something went wrong';
  res.status(statusCode).json({ statusCode, messageData });
};

export { errorMiddleware, Error };
