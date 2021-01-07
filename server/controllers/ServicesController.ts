import CommonController from './CommonController';
import express from 'express';
import ServicesService from '../services/ServicesService';
import response from '../utils/response';

class ServicesController extends CommonController {
  private servicesService: ServicesService;

  constructor(app: express.Application) {
    super(app, 'Services');

    this.servicesService = new ServicesService();
  }

  configureRoutes(): express.Application {
    this.app
      .get(this.baseRoute, response(this.get))

    return this.app;
  }

  private get = async (req: express.Request, res: express.Response) => {
    const items = await this.servicesService.getActiveServices();
    res.json({ items });
  }
}

export default ServicesController;
