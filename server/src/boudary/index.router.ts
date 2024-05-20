import { Request, Response, Router } from 'express';
import { config } from 'dotenv';
import authRouter from './auth.route';
import collectionRouter from './collection.route/index.router';
const appRouter = Router();

// * router

// * authentication routers
appRouter.use('/auth', authRouter);
appRouter.use('/collection', collectionRouter);

export default appRouter;
