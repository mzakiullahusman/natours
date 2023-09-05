const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(express.json()); // middleware - a function that can modify the incoming request data from the client
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('Hello from the middleware stack 👋');
//   next();
// });

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

module.exports = app;
