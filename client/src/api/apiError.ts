class ApiError extends Error {
  private response: Response;
  public apiMessage?: string;
  public errors?: any[];

  constructor(response: Response) {
    super(response.statusText);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.response = response;
  }

  loadResponseData = async () => {
    try {
      const body = await this.response.json();
      this.apiMessage = body.title;
      this.errors = body.errors;
    } catch {
      this.apiMessage = 'Something went wrong!';
      this.errors = [];
    }
  }
}

export default ApiError;
