import config from '../config';
import HttpClient from './httpClient';
import servicesApi, { servicesKeys } from './servicesApi';
import systemApi, { systemKeys } from './systemApi';

class ApiClient extends HttpClient {
  constructor() {
    super(config().apiUrl);
  }

  get services() {
    return {
      ...servicesApi(this),
      keys: servicesKeys
    };
  }

  get system() {
    return {
      ...systemApi(this),
      keys: systemKeys
    };
  }
}

export default new ApiClient();
