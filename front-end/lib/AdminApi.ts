import {Api} from "./api";
import { IUser } from "./authApi";
import { ICollection } from "./CollectionApi";
import { IClass } from "./ClassApi";

class AdminApi extends Api {
    constructor(route: string = "/admin") {
        super();
        this.connect(route);
      }

      getUserData (data : IUser) {
        return this.api.get("/view-users");

      }
 
      deleteUser(userId: number): Promise<any>{
        return this.api.delete(`/delete-user/${userId}`);
      }
      editUser(data: IUser, userId : number) :Promise<any> {
        return this.api.patch(`/update-user/${userId}`, {
      data,
    });
}
    getCollectionData (data : ICollection) {
        return this.api.get("/view-collections");
    }
    editCollection(data: ICollection, collectionId : number) :Promise<any> {
        return this.api.patch(`/update-collection/${collectionId}`, {
      data,
    });
}

    deleteCollection(collectionId: number): Promise<any>{
        return this.api.delete(`/delete-user/${collectionId}`);
    }

    getClassData(data : IClass){
        return this.api.get("/view-class");
    }

    deleteClass(classId : number): Promise<any>{
        return this.api.delete(`/delete-class/${classId}`);
    }
    editClass(data: IClass, classId : number) :Promise<any> {
        return this.api.patch(`/update-class/${classId}`, {
      data,
    });
}

      

}