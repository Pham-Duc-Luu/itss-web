import axios from "axios";
import { Api } from "./api";
import { IUser } from "./authApi";
import { ICollection } from "./CollectionApi";

interface IClassRequest {
  _id: string;
  name: string;
  images?: string;
  hostId?: string;
}
export interface IClass {
  id: number;
  name: string;
  images: string | null;
  hostId: number | null;
  description: string | null;
}

export interface IAnswer {
  id: number;
  answer: string;
  student: string;
  point?: string;
}

export interface IAssigment {
  id: number;
  question: string;
  due: string;
  answers: IAnswer[];
  description: string;
}

export interface IPost {
  id: number;
  date: string;
  content: string;
}

export interface IRequest {
  id: number;
  fromUserId: number;
}

export interface IClassDetails extends IClass {
  studyAt:
    | []
    | {
        classId: number;
        studentId: number;
        student: IUser;
      }[];
  collections: ICollection[] | [];
  assignments: IAssigment[] | [];
  posts: IPost[] | [];
  requests: IRequest[] | [];
}

class ClassApi extends Api {
  constructor(route: string = "/class") {
    super();
    this.connect(route);
  }

  createClass(data: IClassRequest): Promise<any> {
    return this.api.post("/create-class", {
      data,
    });
  }

  updateClass(data: IClassRequest): Promise<any> {
    return this.api.patch("/create-class", {
      data,
    });
  }

  addStudent(data: { hostId: string; classId: string; studentIds: string[] }) {
    return this.api.post("/add-student", { data: data });
  }

  ViewAllClasses(filter?: "all", name?: string, hostId?: string) {
    return this.api.get<{
      data: IClass[];
    }>(`/view-class`, {
      data: {
        filter,
        name,
        hostId,
      },
    });
  }

  viewDetailClass(id: number) {
    return this.api.get<{
      data: IClassDetails;
    }>(`/view-detail-class?id=${id}`);
  }
}

const classApi = new ClassApi();
export default classApi;
