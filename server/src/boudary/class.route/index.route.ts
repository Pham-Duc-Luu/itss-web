import { Request, Response, Router } from "express";
import classController from "../../controller/class.controller";
const classRouter = Router();

// * create a new class
classRouter.post("/create-class", classController.createClass);
classRouter.post("/add-students", classController.addStudents);
classRouter.delete("/remove-students", classController.removeStudent);
classRouter.post("/create-assignment", classController.createAssignment);

classRouter.get("/view-class", classController.viewClass);

classRouter.patch("/update-class");

export default classRouter;
