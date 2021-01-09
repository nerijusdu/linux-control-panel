import { ServiceActionRequest } from "../../../shared/requests";
import HttpClient from "./httpClient";

const servicesApi = (client: HttpClient) => ({
  get: () => client.get('/services'),
  action: (data: ServiceActionRequest) => client.post('/services/action', data)
});

export const servicesKeys = {
  get: 'services'
};

export default servicesApi;
