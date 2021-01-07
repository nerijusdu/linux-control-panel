import HttpClient from "./httpClient";

const servicesApi = (client: HttpClient) => ({
  get: () => client.get('/services')
});

export const servicesKeys = {
  get: 'services'
};

export default servicesApi;
