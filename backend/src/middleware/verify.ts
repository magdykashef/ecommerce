import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { Error } from '../middleware/errorMiddleware';

const handleUnauthorizedError = (next: NextFunction) => {
  const error: Error = new Error('Login error: please try again');
  error.status = 401;
  next(error);
};

const verifyAuthToken = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const authHeader = req.get('Authorization');
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      if (token && bearer === 'bearer') {
        const decode = jwt.verify(
          token,
          config.tokenSecret as unknown as string
        );
        if (decode) {
          next();
        } else {
          // Failed to authenticate user.
          handleUnauthorizedError(next);
        }
      } else {
        // token type not bearer
        handleUnauthorizedError(next);
      }
    } else {
      // No Token Provided.
      handleUnauthorizedError(next);
    }
  } catch (err) {
    handleUnauthorizedError(next);
  }
};

export default verifyAuthToken;
