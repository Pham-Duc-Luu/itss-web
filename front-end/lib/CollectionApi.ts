import { Api } from "./api";

export interface IFlashCardRequest {
  id?: number;
  front_text: string;
  front_img?: string | null;
  back_text: string;
  back_img?: string | null;
}

interface ICollectionRequest {
  name: string;
  userId: number;
  description: string;
  summary?: String;
  flashCard?: [IFlashCardRequest];
}

export interface ICollection {
  id: number;
  name: string;
  description?: string;
  summary?: number;
  user: {
    id: number;
    name: string;
    password: string;
    email: string;
    phoneNumber: string | null;
  } | null;
  flashcards: {
    id?: number;
    front_text: string;
    front_img: string | null;
    back_text: string;
    back_img: string | null;
    collectionId: number;
  }[];
}

class CollectionApi extends Api {
  constructor(route: string = "/collection") {
    super();
    this.connect(route);
  }

  createCollection(data: ICollectionRequest): Promise<any> {
    return this.api.post("/create-collection", {
      data,
    });
  }

  viewCollection(filter?: "all", name?: string, hostId?: string) {
    return this.api.get<{
      data: ICollection[];
    }>(`/view-collection`, {
      data: {
        filter,
        name,
        hostId,
      },
    });
  }
  deleteConllection(collectionid: Number): Promise<any> {
    return this.api.delete(`/delete/${collectionid}`);
  }

  editCollection(data: ICollectionRequest, collectionid: Number): Promise<any> {
    return this.api.patch(`/update-collection/${collectionid}`, {
      data,
    });
  }

  editFlashCard(data: {flashcard: IFlashCardRequest, collectionid: String, userId: String }): Promise<any> {
    return this.api.post(`/update-flash-card/`, {
      data,
    });
  }

  addFlashCard(data: IFlashCardRequest, collectionid: Number ): Promise<any> {
    return this.api.post(`/${collectionid}/add-flash-card/`, {
      data,
    });
  }
}

const collectionApi = new CollectionApi();

export default collectionApi;
