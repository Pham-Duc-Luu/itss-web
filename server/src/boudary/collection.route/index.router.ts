<<<<<<< HEAD
import { Router } from "express";
import authController from "../../controller/auth.controller";
import collectionController from "../../controller/collection.controller";

const collectionRouter = Router();

// TODO: create a sign-up route
collectionRouter.post(
  "/create-collection",
  collectionController.createCollection
);

collectionRouter.post("/add-flash-card", collectionController.addFlashCard);
// collectionRouter.post('/forgot-password', authController.sign_up);

export default collectionRouter;
=======
import { Router } from 'express';
import authController from '../../controller/auth.controller';
import collectionController from '../../controller/collection.controller';

const collectionRouter = Router();

// TODO: create a sign-up route
collectionRouter.post(
  '/create-collection',
  collectionController.createCollection
);

// collectionRouter.post('/forgot-password', authController.sign_up);

export default collectionRouter;
>>>>>>> refs/remotes/origin/main
