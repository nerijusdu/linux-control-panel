import express from 'express';
import CommonController from './CommonController';
import ServicesController from './ServicesController';
import SystemController from './SystemController';

export const configureRoutes = (app: express.Application) => {
  const routes: CommonController[] = [
    new ServicesController(app),
    new SystemController(app),
  ];

  routes.forEach(controller => {
    controller.configureRoutes();
    console.log(`Routes configured for ${controller.getName()}Controller`);
  });
};
