import { Api } from "./api";


interface ICreateAccountRequest {

}

interface ILoginRequest {
    username: string,
    password: string,
}


interface IchangeInforRequest {

}

class AuthenticateApi extends Api {
    constructor(route: string = "/auth") {
      super();
      this.connect(route);
    }
  
    SignUp(data: ICreateAccountRequest): Promise<any> {
        return this.api.post("/sign-up", {
          data
        });
    }
    
    Login(data: ILoginRequest): Promise<any> {
        return this.api.post("/login", {
          data
        });
    }

    ChangeUserInfor(data: IchangeInforRequest): Promise<any> {
        return this.api.post("/user/update-user", {
          data
        });
    }


}