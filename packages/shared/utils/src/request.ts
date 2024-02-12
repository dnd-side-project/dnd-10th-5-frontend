import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export function setAxiosUrl(url: string) {
  axiosInstance.defaults.baseURL = url;
}

async function request<Data, Result>(
  url: string,
  method: string,
  data?: Record<string, Data>,
) {
  const response = await axiosInstance({
    url,
    method,
    data,
  });

  return response.data as Result;
}

export async function get<Result>(url: string) {
  return request<undefined, Result>(url, 'GET');
}

export async function post<Data, Result>(
  url: string,
  data: Record<string, Data>,
) {
  return request<Data, Result>(url, 'POST', data);
}

export async function put<Data, Result>(
  url: string,
  data: Record<string, Data>,
) {
  return request<Data, Result>(url, 'PUT', data);
}

export async function del<Result>(url: string) {
  return request<undefined, Result>(url, 'DELETE');
}

export async function patch<Data, Result>(
  url: string,
  data: Record<string, Data>,
) {
  return request<Data, Result>(url, 'PATCH', data);
}
