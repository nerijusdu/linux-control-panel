import { RequestHandler } from 'express';

export default (handler: RequestHandler): RequestHandler => async (req, res, next) => {
  return Promise.resolve(handler(req, res, next)).catch(next);
};
