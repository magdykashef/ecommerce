import express, { Request, Response } from 'express';

import morgan from 'morgan';

import helmet from 'helmet';

import RateLimit from 'express-rate-limit';

import cors from 'cors';

import swaggerUI from 'swagger-ui-express';

import YAML from 'yamljs';

import { errorMiddleware } from './middleware/errorMiddleware';

import config from './config';

import userRoutes from './handlers/userRoutes';

const swaggerJsDoc = YAML.load('./api.yaml');

const port = config.PORT || 8000;

const app: express.Application = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use(express.json());

app.use(cors());

app.use(morgan('common'));

app.use(helmet());

app.use(
  RateLimit({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Too many requests from this IP, please try again after an hour',
  })
);

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

userRoutes(app);

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message:
      'Ohh you are lost, read the API documentation to find your way back home',
  });
});

app.listen(port, () => {
  console.log(`sever start at: http://localhost:${port}`);
});

export default app;
