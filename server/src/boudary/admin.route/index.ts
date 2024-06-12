import { Router } from "express";
import adminController from "../../controller/admin.controller";
import { list } from "@sequelize/core/lib/expression-builders/list";
import { auth } from "google-auth-library";

const adminRouter = Router();


/**
 * * login with email and password
 */
adminRouter.post("/admin", adminController.login);

/**
 * * View user list
 */
// xem ds ng dung
adminRouter.get("/view-users", adminController.viewUserList);

// xem ds class  
adminRouter.post("/view-class-list", adminController.viewClassList);

// xoa user 
adminRouter.post("/remove-user", adminController.removeUser);
// sua tt user 
adminRouter.patch("/update-user", adminController.updateUser);
// xoa class
adminRouter.post("/remove-class", adminController.removeClass);
// sua class
adminRouter.patch("/update-class", adminController.updateClass);

export default adminRouter;
