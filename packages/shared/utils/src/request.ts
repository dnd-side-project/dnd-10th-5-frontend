import axios from 'axios';

const HOST = 'https://34.47.80.30:8081';

const axiosInstance = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

async function request<D, R>(
  url: string,
  method: string,
  data?: Record<string, D>,
) {
  const response = await axiosInstance({
    url,
    method,
    data,
  });

  return response.data as R;
}

export async function get<R>(url: string) {
  return request<undefined, R>(url, 'GET');
}

export async function post<D, R>(url: string, data: Record<string, D>) {
  return request<D, R>(url, 'POST', data);
}

export async function put<D, R>(url: string, data: Record<string, D>) {
  return request<D, R>(url, 'PUT', data);
}

export async function del<R>(url: string) {
  return request<undefined, R>(url, 'DELETE');
}
