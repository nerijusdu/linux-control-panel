import ApiError from './apiError';

interface HttpRequestOptions {
  method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
  headers?: any;
  body?: any;
  autoContentType?: boolean;
  notJson?: boolean;
  parseResponse?: boolean;
}

class HttpClient {
  private _baseURL: string;

  constructor(baseUrl?: string) {
    this._baseURL = baseUrl || '';
  }

  get = (endpoint: string, options: HttpRequestOptions = {}) => this._fetchJson(
    endpoint,
    { ...options, method: 'GET' }
  )

  post = (endpoint: string, body: any, options: HttpRequestOptions = {}) => this._fetchJson(
    endpoint,
    {
      ...options,
      body: options.notJson ? body : JSON.stringify(body),
      method: 'POST'
    }
  )

  delete = (endpoint: string, options: HttpRequestOptions = {}) => this._fetchJson(
    endpoint,
    {
      parseResponse: false,
      ...options,
      method: 'DELETE'
    }
  )

  private _getHeaders = async (options: HttpRequestOptions) => {
    const headers = {
      ...(options.headers || {})
    };
    if (!options.autoContentType) {
      headers['Content-Type'] = 'application/json';
    }

    return headers;
  }

  private _fetchJson = async (endpoint: string, options: HttpRequestOptions = {}) => {
    const headers = await this._getHeaders(options);
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers
    });

    if (!res.ok) {
      const error = new ApiError(res);
      await error.loadResponseData();
      throw error;
    }

    if (options.parseResponse !== false && res.status !== 204) {
      return res.json();
    }

    return undefined;
  }
}

export default HttpClient;