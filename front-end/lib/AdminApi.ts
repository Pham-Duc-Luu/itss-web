import {Api} from "./api";
import { IUser } from "./authApi";
class AuthenticateApi extends Api {
    constructor(route: string = "/admin") {
        super();
        this.connect(route);
      }

      getUserData () {

      }

}