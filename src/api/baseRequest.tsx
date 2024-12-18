import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Decrypt } from "../utils/encryption";

export interface ServerResponse<T = any> {
  data: T;
  isSuccess: boolean;
  message: string;
  metadata?: string;
}

export interface QueryResponse<T = any> {
  data: ServerResponse<T>;
}

const baseURL: string = "http://127.0.0.1:8080";

const client: AxiosInstance = axios.create({ baseURL });

interface RequestOptions extends AxiosRequestConfig {
  url: string;
}

export const request = async (
  options: RequestOptions
): Promise<AxiosResponse> => {
  const token = localStorage.getItem("fitnesstoken");
  client.defaults.headers.common.Authorization = `Bearer ${Decrypt(token!)}`;
  return client(options);
};
