import { PowerAction } from "../../../shared/models";
import HttpClient from "./httpClient";

const systemApi = (client: HttpClient) => ({
  power: (action: PowerAction) => client.post('/system/power', { action })
});

export const systemKeys = {
};

export default systemApi;
