export type ListResponse<TData> = {
  items: TData[];
}

export type ServiceStatus = {
  name: string;
  enabled: boolean;
};