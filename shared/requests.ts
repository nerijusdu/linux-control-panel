import { PowerAction, ServiceAction } from "./models";


export type ServiceActionRequest = {
  serviceName: string;
  action: ServiceAction;
};

export type PowerActionRequest = {
  action: PowerAction;
};
