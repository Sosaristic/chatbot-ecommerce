import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

type ApiError = {
  message: string;
  status: string | number;
  ok: boolean;
};

const apiInstance = axios.create({
  baseURL: 'https://logistic-chatbot.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  timeout: 30000,
  timeoutErrorMessage: 'Request timed out',
  withCredentials: true,
});

export const httpRequest = async <T>(
  url: string,
  method: Method,
  data?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<{ data?: T; error?: ApiError }> => {
  try {
    const response: AxiosResponse<T> = await apiInstance.request<T>({
      url,
      method,
      data,
      ...config,
    });

    return { data: response.data };
  } catch (error) {
    let apiError: ApiError | undefined;

    if (axios.isAxiosError(error) && error.response) {
      apiError = {
        message: error.response.data.message,
        status: error.response.status,
        ok: false,
      } as ApiError;
    } else {
      if (error instanceof Error) {
        apiError = {
          message: error.message,
          status: 'Error',
          ok: false,
        };
      }
    }

    return { error: apiError };
  }
};
