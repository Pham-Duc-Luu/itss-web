import { Router } from 'express';
import authController from '../../controller/auth.controller';

const authRouter = Router();

// TODO: create a sign-up route
authRouter.post('/sign-up', authController.sign_up);
authRouter.post('/login', authController.login);
// authRouter.post('/forgot-password', authController.sign_up);

export default authRouter;
