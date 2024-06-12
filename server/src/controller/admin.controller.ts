import { Response, Request, NextFunction } from "express";
import {
    BadRequest,
    HttpErrorResponse,
    InvalidParameter,
    MissingParameter,
} from "../lib/http.reponse";
import Logger from "../lib/logger";
import { validateService } from "../service/validate.service";
import { prisma } from "../database/postgresql/connect.postgresql";
import { config } from "dotenv";
config();
class AdminController {
    async login(
        req: Request<any, any, { email: string; password: string }>,
        res: Response,
        next: NextFunction
    ) {
        try {
            if (
                req.body.email === process.env.ADMIN_EMAIL &&
                req.body.password === process.env.ADMIN_PASSWORD
            ) {
                next();
            }

            return res.status(401).json({ message: "Unathorite" });
        } catch (error) {}
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
  async removeUser(
    req: Request<any,any, {userId: number}>,
    res: Response
  ) {
    try {
        const {userId} = req.body;

        const foundUser = await prisma.user.delete(
          {where:{id: userId}}
        )
        return res.status(200);
    }
    catch (error: any) {
      console.log(error.stack);
     const err = new HttpErrorResponse(error.message, error.statusCode);
     return res.status(err.statusCode).json({ message: err.message });
   }; 
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
