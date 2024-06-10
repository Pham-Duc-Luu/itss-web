import { Api } from "./api";


interface IClassRequest {
    _id: string 
    name: string;
    images?: string;
    hostId?: string
  }

class CollectionApi extends Api {
    constructor(route: string = "/class") {
      super();
      this.connect(route);
    }
  
    createClass(data: IClassRequest): Promise<any> {
      return this.api.post("/create-class", {
        data
      });
    }

    updateClass(data: IClassRequest): Promise<any> {
      return this.api.patch("/create-class", {
        data
      });
    }

    ViewAllClasses(classId: number): Promise<any> {
      return this.api.get(`/view-class`);
    }

  }