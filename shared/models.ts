export type ServiceStatus = {
  name: string;
  enabled: boolean;
};

export enum ServiceAction {
  Stop = 'stop',
  Start = 'start',
  Restart = 'restart'
}

export enum PowerAction {
  Shutdown,
  Reboot
}
