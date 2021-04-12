import axios, { Method, AxiosResponse } from 'axios';

interface HttpResHandler {
  success(): void;
  error(error: Error | string): void;
}

export interface HttpRes extends AxiosResponse<{ success: boolean }> {}

function apiWrapper(path: string, method: Method, body: object, httpResHandler: HttpResHandler) {
  const host = process.env.REACT_APP_HOST;
  const url = host + path;

  const call = async (): Promise<HttpRes> => {
    const response = axios({
      method,
      url,
      data: body,
      timeout: 2000,
    });

    return response;
  };

  const httpResHandling = async () => {
    try {
      const response = await call();
      console.log(`resonse is ${response.data}`);
      console.log(`resonse is ${response.status}`);

      if (response.data.success) {
        httpResHandler.success();
      }
    } catch (error) {
      httpResHandler.error(error);
    }
  };

  httpResHandling();
}

export default apiWrapper;
