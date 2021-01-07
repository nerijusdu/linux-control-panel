import HttpClient from './httpClient';
import servicesApi, { servicesKeys } from './servicesApi';

class ApiClient extends HttpClient {
  constructor() {
    super('http://localhost:4200');
  }

  get services() {
    return {
      ...servicesApi(this),
      keys: servicesKeys
    };
  }
}

export default new ApiClient();
