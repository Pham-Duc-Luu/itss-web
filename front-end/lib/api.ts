import axios, { isCancel, AxiosError, AxiosInstance } from "axios";

export interface ICreateCollectionRequest {
  name: string;
  userId: number;
}

class Api {
  baseUrl: string;

  api: AxiosInstance;
  connect(route?: string) {
    this.api = axios.create({
      baseURL: "http://localhost:5002" + route,
      timeout: 1000,
    });
  }
}

class CollectionApi extends Api {
  constructor(route: string = "/collections") {
    super();
    this.connect(route);
  }

  createCollection(data: ICreateCollectionRequest): Promise<any> {
    return this.api.post("/create", {
      name,
      userId,
    });
  }
}
