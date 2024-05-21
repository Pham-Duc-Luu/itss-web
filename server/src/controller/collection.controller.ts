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
import { Flashcard, Prisma } from "@prisma/client";
import collectionService from "../service/collection.service";

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
        flashCards: [Flashcard];
      }
    >,
    res: Response
  ) {
    try {
      const { userId, name, summary, description, flashCards } = req.body;
      if (!userId || !name) {
        throw new MissingParameter();
      }

      // * check if the user is exist or not
      const existUser = await prisma.user.findFirst({
        where: {
          id: Number(userId),
        },
      });

      if (!existUser) {
        throw new BadRequest("user not found");
      }

      // * create a new colltion througth user
      const newCollection = await prisma.user.update({
        where: {
          id: Number(existUser.id),
        },
        data: {
          collections: {
            create: {
              name,
              summary,
              description,

              flashcards: {
                create: flashCards,
              },
            },
          },
        },
        include: {
          collections: {
            include: {
              flashcards: true,
            },
          },
        },
      });

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
        flashCards: [Flashcard];
      }
    >,
    res: Response
  ) {
    try {
      const { flashCards, collectionId } = req.body;

      const collection = await prisma.collection.findFirst({
        where: { id: Number(collectionId) },
      });

      if (!collection) {
        throw new InvalidParameter("Colleciton is not exist");
      }

      if (flashCards && flashCards.length > 0 && collection.id) {
        const newFlashCard = await prisma.flashcard.createMany({
          data: flashCards.map<Flashcard>((flashcard, index) => {
            return {
              ...flashcard,
              collectionId: collection.id,
            };
          }),
        });

        const existCollection = await prisma.collection.findFirst({
          where: { id: Number(collectionId) },
          select: {
            flashcards: true,
          },
        });

        return res.status(200).json(existCollection);
      }
    } catch (error: any) {
      console.log(error.stack);
      const err = new HttpErrorResponse(error.message, error.statusCode);
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

const collectionController = new CollectionController();
export default collectionController;
