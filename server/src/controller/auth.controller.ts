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

class AuthController {
  async sign_up(
    req: Request<any, any, { name: string; password: string; email: string }>,
    res: Response
  ) {
    try {
      const { email, password, name } = req.body;

      if (!email || !password || !name) {
        throw new MissingParameter();
      }

      if (
        !validateService.validateEmail(email) ||
        !validateService.validatePassword(password)
      ) {
        throw new InvalidParameter();
      }

      const existUser = await prisma.user.findFirst({ where: { email } });

      if (existUser) {
        throw new BadRequest("Email is already exists");
      }

      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      });
      return res.status(200).json({ userId: newUser.id });
    } catch (error: any) {
      console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    }
  }

  async login(
    req: Request<any, any, { password: string; email: string }>,
    res: Response
  ) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingParameter();
      }

      if (
        !validateService.validateEmail(email) ||
        !validateService.validatePassword(password)
      ) {
        throw new InvalidParameter();
      }

      const existUser = await prisma.user.findFirst({ where: { email } });

      if (!existUser) {
        throw new BadRequest("Email is not exists");
      }

      if (existUser.password !== password) {
        throw new BadRequest("Password is incorrect");
      }

      return res.status(200).json({ userId: existUser.id });
    } catch (error: any) {
      console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

const authController = new AuthController();
export default authController;
