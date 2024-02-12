import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

async function request<DATA, RESULT>(
  url: string,
  method: string,
  data?: Record<string, DATA>,
) {
  const response = await axiosInstance({
    url,
    method,
    data,
  });

  return response.data as RESULT;
}

export async function get<RESULT>(url: string) {
  return request<undefined, RESULT>(url, 'GET');
}

export async function post<DATA, RESULT>(
  url: string,
  data: Record<string, DATA>,
) {
  return request<DATA, RESULT>(url, 'POST', data);
}

export async function put<DATA, RESULT>(
  url: string,
  data: Record<string, DATA>,
) {
  return request<DATA, RESULT>(url, 'PUT', data);
}

export async function del<RESULT>(url: string) {
  return request<undefined, RESULT>(url, 'DELETE');
}
