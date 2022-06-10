import express, { Request, Response } from 'express';
import {
  check,
  ValidationChain,
  Result,
  ValidationError,
  validationResult,
} from 'express-validator';

const createOrderValidator = (): ValidationChain[] => [
  check('customer_id')
    .notEmpty()
    .withMessage('Customer Id is required'),
  check('product_name')
    .notEmpty()
    .withMessage('Product name is required')
    .isAlpha('en-US', { ignore: '_' })
    .withMessage('Product name should be alphabetic characters'),
  check('quantity')
    .notEmpty()
    .withMessage('Quantity is required')
    .isNumeric()
    .withMessage('Quantity should be a number'),
  check('total_price')
    .notEmpty()
    .withMessage('Total price is required'),
];

const expressValidator = (req: Request): ValidationError[] => {
  const errors: Result<ValidationError> = validationResult(req);
  const messages: ValidationError[] = [];
  if (!errors.isEmpty()) {
    for (const error of errors.array()) {
      messages.push(error);
    }
  }
  return messages;
};

const validationMiddleware = (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  const errors = expressValidator(req);
  if (errors.length) {
    return res.status(400).json({
      statusCode: 400,
      messageData: errors[0].msg,
    });
  }
  next();
};

export { createOrderValidator, validationMiddleware };
