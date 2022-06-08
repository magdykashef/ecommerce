import express, { Request, Response } from 'express';
import {
  check,
  ValidationChain,
  Result,
  ValidationError,
  validationResult,
} from 'express-validator';

const createUserValidator = (): ValidationChain[] => [
  check('user_name')
    .notEmpty()
    .withMessage('User name is required')
    .isAlpha('en-US', { ignore: '_' })
    .withMessage('name should be alphabetic characters'),
  check('first_name')
    .notEmpty()
    .withMessage('First name is required')
    .isAlpha('en-US', { ignore: '_' })
    .withMessage('First name should be alphabetic characters'),
  check('last_name')
    .notEmpty()
    .withMessage('Last name is required')
    .isAlpha('en-US', { ignore: '_' })
    .withMessage('Last name should be alphabetic characters'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Input valid Email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 16 })
    .withMessage(
      'Password must be at least 8 characters and maximum 16 character '
    )
    .matches(/\d/)
    .withMessage('must contain a number')
    .not()
    .isIn(['123', 'password', 'god'])
    .withMessage('Do not use a common word as the password'),
  check('address').notEmpty().withMessage('User address is required'),
  check('phone')
    .notEmpty()
    .withMessage('User phone is required')
    .isMobilePhone('any', { strictMode: true })
    .withMessage(
      'The mobile phone number must be supplied with the country code and therefore must start with +'
    ),
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

export { createUserValidator, validationMiddleware };
