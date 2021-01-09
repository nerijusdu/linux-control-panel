import express from 'express';
import CommonController from './CommonController';
import response from '../utils/response';
import SystemService from '../services/SystemService';
import { PowerActionRequest } from '../../shared';

class SystemController extends CommonController {
  private systemService: SystemService;

  constructor(app: express.Application) {
    super(app, 'System');

    this.systemService = new SystemService();
  }

  configureRoutes(): express.Application {
    this.app
      .post(`${this.baseRoute}/power`, response(this.power));

    return this.app;
  }

  private power = async (
    req: express.Request<any, any, PowerActionRequest>,
    res: express.Response
  ) => {
    await this.systemService.power(req.body.action);
    res.json({ success: true });
  }
}

export default SystemController;
