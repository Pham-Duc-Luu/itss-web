import { Response, Request } from 'express';
import {
  BadRequest,
  HttpErrorResponse,
  InvalidParameter,
  MissingParameter,
} from '../lib/http.reponse';
import Logger from '../lib/logger';
import { validateService } from '../service/validate.service';
import UserModel from '../entity/User.model';
import CollectionModel, { IFlashCard } from '../entity/collection.model';

class CollectionController {
  async createCollection(
    req: Request<
      any,
      any,
      {
        userId: string;
        name: string;
        summary?: string;
        description?: string;
        flashCards: [IFlashCard];
      }
    >,
    res: Response
  ) {
    try {
      const { userId, name, summary, description, flashCards } = req.body;
      if (!userId || !name) {
        throw new MissingParameter();
      }

      const existUser = await UserModel.findById({ _id: userId });

      if (!existUser) {
        throw new BadRequest('user not found');
      }

      const newCollection = await CollectionModel.create({
        name: name,
        summary,
        description,
        flashCard: flashCards,
      });

      existUser.collectionsId?.push(newCollection.id);
      await existUser.save();
      return res.status(200).json({ collection: newCollection });
    } catch (error: any) {
      console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    }
  }

  async addFlashCard(
    req: Request<
      any,
      any,
      {
        collectionId: string;
        flashCards: [IFlashCard];
      }
    >,
    res: Response
  ) {
    try {
    } catch (error: any) {
      console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

const collectionController = new CollectionController();
export default collectionController;
