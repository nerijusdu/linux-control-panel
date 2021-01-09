import express from 'express';

abstract class CommonController {
  protected app: express.Application;
  protected name: string;
  protected baseRoute: string;

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.baseRoute = `/api/${name.toLowerCase()}`;
  }

  getName() {
    return this.name;
  }

  abstract configureRoutes(): express.Application;
}

export default CommonController;
