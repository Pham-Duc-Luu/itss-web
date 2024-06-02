import { HttpErrorResponse, MissingParameter } from "../lib/http.reponse";
import { Response, Request } from "express";
import classService from "../service/class.service";
import { prisma } from "../database/postgresql/connect.postgresql";

class ClassController {
  async createClass(
    req: Request<
      any,
      any,
      { userId: string; classInfo: { name: string; images: string } }
    >,
    res: Response
  ) {
    try {
      const { userId, classInfo } = req.body;
      if (!userId || !classInfo || !classInfo.name) {
        throw new MissingParameter();
      }

      const newClass = await classService.createClass(
        Number(userId),
        classInfo.name,
        classInfo.images
      );

      return res.status(200).json({ data: newClass });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }
  async addStudents(
    req: Request<
      any,
      any,
      { hostId: string; classId: string; studentIds: string[] }
    >,
    res: Response
  ) {
    try {
      const { hostId, classId, studentIds } = req.body;
      console.log(studentIds);

      if (!hostId || !classId || !studentIds || !(studentIds.length > 0)) {
        throw new MissingParameter();
      }

      const myclass = await classService.addStudents(
        Number(hostId),
        Number(classId),
        studentIds.map((item) => Number(item))
      );

      return res.status(200).json({ data: myclass });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }

  async removeStudent(
    req: Request<
      any,
      any,
      { hostId: string; classId: string; studentIds: string[] }
    >,
    res: Response
  ) {
    try {
      const { hostId, classId, studentIds } = req.body;
      console.log(studentIds);

      if (!hostId || !classId || !studentIds || !(studentIds.length > 0)) {
        throw new MissingParameter();
      }

      const myclass = await classService.deleteStudents(
        Number(hostId),
        Number(classId),
        studentIds.map((item) => Number(item))
      );

      return res.status(200).json({ data: myclass });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }

  async createAssignment(
    req: Request<
      any,
      any,
      {
        hostId: string;
        classId: string;
        assignment: {
          question: string;
          due: string;
        };
      }
    >,
    res: Response
  ) {
    try {
      const { hostId, classId, assignment } = req.body;

      if (!hostId || !classId || !assignment || !assignment.question) {
        throw new MissingParameter();
      }

      const myclass = await classService.createAssignment(
        Number(hostId),
        Number(classId),
        assignment.question,
        assignment.due
      );

      return res.status(200).json({ data: myclass });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }

  async updateClass(
    req: Request<
      any,
      any,
      {
        hostId: string;
        classId: string;
        images?: string;
        collections?: string[];
      }
    >,
    res: Response
  ) {
    try {
      const { hostId, classId, images, collections } = req.body;

      if (!hostId || !classId) {
        throw new MissingParameter();
      }

      //   return res.status(200).json({ data: myclass });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }

  async viewClass(
    req: Request<
      any,
      any,
      any,
      { filter?: "all"; name?: string; hostId?: string }
    >,
    res: Response
  ) {
    try {
      const { filter, name, hostId } = req.query;

      let data;

      if (hostId) {
        if (name) {
          data = await prisma.class.findMany({
            where: {
              hostId: Number(hostId),
              name: {
                contains: String(name),
              },
            },
            include: {
              host: true,
              collections: true,
              assignments: true,
              posts: true,
            },
          });
        } else {
          data = await prisma.class.findMany({
            where: {
              hostId: Number(hostId),
            },
          });
        }
      } else {
        if (name) {
          data = await prisma.class.findMany({
            where: {
              name: {
                contains: String(name),
              },
            },
          });
        } else {
          data = await prisma.class.findMany({});
        }
      }
      return res.status(200).json({ data: data });
    } catch (error: any) {
      const err = new HttpErrorResponse(
        String(error?.message),
        Number(error?.statusCode || 500)
      );

      console.log(error);
      return res.status(err.statusCode).json(err.message);
    }
  }
}

const classController = new ClassController();
export default classController;
