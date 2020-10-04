import express, { Router } from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './utils/auth';

import listRouter from './resources/user/user.router';
import config from './config';

export const app = express();

/* Removed the X-Power-By header that can cause conflicts */
app.disable('x-powered-by');

/* Adds necessary middlewares */
app.use(cors()); // CORS - ALlow-Origin Header
app.use(json()); // Application Type JSON HEader
app.use(urlencoded({ extended: true })); // Parses query param strings
app.use(morgan('dev')); // Logs for each request
app.use(cookieParser()); // Parses cookies
app.use(auth); // Custom middleware to handle authentication

/* Welcome message on root endpoint */
app.get('/', (req, res) => {
  res.send({ message: 'PagoDiario Challenge' });
});

/* User Entity endpoint */
app.use('/api/v1/user', listRouter);

export const start = () => {
  console.log('=====================================');
  console.log(' Server started on Port ' + config.port);
  console.log('=====================================');
  app.listen(config.port);
};
