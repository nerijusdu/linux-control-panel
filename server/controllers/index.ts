import CommonController from './CommonController';
import ServicesController from './ServicesController';
import express from 'express';

export const configureRoutes = (app: express.Application) => {
  const routes: CommonController[] = [
    new ServicesController(app)
  ];

  routes.forEach(controller => {
    controller.configureRoutes();
    console.log(`Routes configured for ${controller.getName()}Controller`);
  })
}
