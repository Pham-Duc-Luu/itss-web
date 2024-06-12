import { Api } from "./api";
import { IUser } from "./authApi";
import { ICollection } from "./CollectionApi";
import { IClass } from "./ClassApi";
import exp from "constants";

interface IUserData {
  id: number;
    name: string;
    password: string;
    email: string;
    phoneNumber: string | null;
}

class AdminApi extends Api {
    constructor(route: string = "/admin") {
        super();
        this.connect(route);
    }

    getUserData() {
        return this.api.get<{data: IUserData[]}>("/view-users");
    }

    deleteUser(userId: number): Promise<any> {
        return this.api.delete(`/delete-user/${userId}`);
    }
    editUser(data: IUser, userId: number): Promise<any> {
        return this.api.patch(`/update-user/${userId}`, {
            data,
        });
    }
    getCollectionData(data: ICollection) {
        return this.api.get("/view-collections");
    }
    editCollection(data: ICollection, collectionId: number): Promise<any> {
        return this.api.patch(`/update-collection/${collectionId}`, {
            data,
        });
    }

    deleteCollection(collectionId: number): Promise<any> {
        return this.api.delete(`/delete-user/${collectionId}`);
    }

    getClassData(data: IClass) {
        return this.api.get("/view-class");
    }

    deleteClass(classId: number): Promise<any> {
        return this.api.delete(`/delete-class/${classId}`);
    }
    editClass(data: IClass, classId: number): Promise<any> {
        return this.api.patch(`/update-class/${classId}`, {
            data,
        });
    }
}

const adminApi = new AdminApi();
export default adminApi;
