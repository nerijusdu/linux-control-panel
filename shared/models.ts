export type ListResponse<TData> = {
  items: TData[];
}

export type ServiceStatus = {
  name: string;
  enabled: boolean;
};

export type ServiceActionRequest = {
  serviceName: string;
  action: ServiceAction;
}

export enum ServiceAction {
  Stop = 'stop',
  Start = 'start',
  Restart = 'restart'
};

export type SuccessResponse = {
  success: boolean;
};
