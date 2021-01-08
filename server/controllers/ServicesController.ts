import CommonController from './CommonController';
import express from 'express';
import ServicesService from '../services/ServicesService';
import response from '../utils/response';
import { ServiceActionRequest } from '../models';

class ServicesController extends CommonController {
  private servicesService: ServicesService;

  constructor(app: express.Application) {
    super(app, 'Services');

    this.servicesService = new ServicesService();
  }

  configureRoutes(): express.Application {
    this.app
      .get(this.baseRoute, response(this.get))
      .post(`${this.baseRoute}/action`, response(this.action));

    return this.app;
  }

  private get = async (req: express.Request, res: express.Response) => {
    const items = await this.servicesService.getActiveServices();
    res.json({ items });
  }

  private action = async (
    req: express.Request<any, any, ServiceActionRequest>,
    res: express.Response
  ) => {
    const success = await this.servicesService.action(req.body.serviceName, req.body.action);
    res.json({ success });
  }
}

export default ServicesController;
