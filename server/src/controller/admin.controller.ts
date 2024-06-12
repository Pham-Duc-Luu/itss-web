import { Response, Request } from "express";
import {
  BadRequest,
  HttpErrorResponse,
  InvalidParameter,
  MissingParameter,
} from "../lib/http.reponse";
import Logger from "../lib/logger";
import { validateService } from "../service/validate.service";
import { prisma } from "../database/postgresql/connect.postgresql";

class AdminController {
  async login() {
    return 'Admin';
  }
  async viewUserList(
    req: Request,
    res: Response
  ) {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json({ data: users });
        
    }
    catch (error: any) {
       console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    };
  }
  async viewClassList(
    req: Request,
    res: Response
  ) {    
    {
      try {
          const classes = await prisma.class.findMany();
          return res.status(200).json({ data: classes });
          
      }
      catch (error: any) {
         console.log(error.stack);
        const err = new HttpErrorResponse(error.message, error.statusCode);
        return res.status(err.statusCode).json({ message: err.message });
      };
    };
  }
  async addUser() {
    return 'Admin';
  }
  async removeUser() {
    return 'Admin';
  }
  async updateUser() {  
    return 'Admin';
  }
  async removeClass() {
    return 'Admin';
  }
  async updateClass() { 
    return 'Admin';
  }
}

const adminController = new AdminController();
export default adminController;