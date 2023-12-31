/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json()); // middleware - a function that can modify the incoming request data from the client
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const testServer = (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from Natours server!', app: 'Natours' });
};

// ROUTES
app.get('/', testServer);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.statusCode = 404;
  err.status = 'fail';

  next(err);
});

app.use((err, req, res, next)=>{
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
next();
});

module.exports = app;
