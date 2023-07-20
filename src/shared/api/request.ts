import { AxiosResponse } from 'axios';
import { axios } from './config';

type RequestConfig = {
  url?: string;
  method?: 'get' | 'post' | 'patch' | 'delete' | 'put';
  params?: Record<string, string | number>;
  data?: any;
  headers?: Record<string, string>;
};

export function request<T>({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
}: RequestConfig): Promise<AxiosResponse<T>> {
  if (headers.Authorization) {
    headers.Authorization = localStorage.getItem('token') || '';
  }

  return axios({
    url,
    method,
    params,
    data,
    headers,
  });
}
