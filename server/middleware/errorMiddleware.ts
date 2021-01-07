import express from 'express';

const errorMiddleware: express.ErrorRequestHandler = (error, req, res, next) => {
  res.status(500).json({ error });
  next();
};

export default errorMiddleware;
