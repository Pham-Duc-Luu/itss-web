import axios, { isCancel, AxiosError, AxiosInstance } from "axios";
export class Api {
  baseUrl?: string;

  api: AxiosInstance;
  connect(route?: string) {
    this.api = axios.create({
      baseURL: "http://localhost:5002" + route,
      timeout: 1000,
    });
  }
}
