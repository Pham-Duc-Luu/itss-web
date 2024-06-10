import { Api } from "./api";


interface IFlashCardRequest {
    front_text: string;
    front_img: string;
    back_text: string;
    back_img: string;
  }
  
interface ICollectionRequest {
    name: string;
    userId: number;
    description: string,
    summary?: String;
    flashCard?: [IFlashCardRequest];
}


class CollectionApi extends Api {
    constructor(route: string = "/collections") {
      super();
      this.connect(route);
    }
  
    createCollection(data: ICollectionRequest): Promise<any> {
      return this.api.post("/create-collection", {
        data
      });
    }

    deleteConllection(collectionid: Number): Promise<any> {
        return this.api.delete(`/delete/${collectionid}`);
    }

    editCollection(data: ICollectionRequest, collectionid: Number): Promise<any> {
        return this.api.patch(`/update-collection/${collectionid}`, {
            data
        });
      }

    addFlashCard(data: IFlashCardRequest,collectionid: Number): Promise<any> {
      return this.api.post(`/${collectionid}/add-flash-card/`, {
        data
      });
    }

  }