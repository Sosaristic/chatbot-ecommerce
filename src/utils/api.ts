import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
  timeoutErrorMessage: 'Request timed out',
});

type Error = {
  message: string;
};

export const makeApiRequest = async <T>(
  url: string,
  method: Method,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<{ data?: T; error?: Error }> => {
  try {
    const response: AxiosResponse<T> = await apiInstance.request<T>({
      url,
      method,
      data,
      ...config,
    });
    return { data: response.data, error: { message: '' } };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: { message: error.message },
      };
    }
    return {
      error: { message: 'There was an error' },
    };
  }
};
