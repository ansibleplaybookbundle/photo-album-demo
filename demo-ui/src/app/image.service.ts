import {Injectable} from '@angular/core';
import {Image} from "./image";
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageService {
  private imagesUrl = '/api/images';

  constructor(private http: Http) {
  }

  getImages(): Promise<Image[]> {
    return this.http.get(this.imagesUrl)
      .toPromise()
      .then(response => {
        console.log(response.json());
        return response.json().images as Image[]
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


// @Injectable()
// export class ImageService {
//   getImages(): Promise<Image[]> {
//     const IMAGES: Image[] = [
//       { url: "https://dog.ceo/api/img/hound-afghan/n02088094_4310.jpg"},
//       { url: "https://dog.ceo/api/img/spaniel-blenheim/n02086646_462.jpg"},
//       { url: "https://dog.ceo/api/img/greyhound-italian/n02091032_1030.jpg"},
//       { url: "https://dog.ceo/api/img/entlebucher/n02108000_157.jpg"},
//       { url: "https://dog.ceo/api/img/stbernard/n02109525_13410.jpg"},
//       { url: "https://dog.ceo/api/img/spaniel-cocker/n02102318_2073.jpg"},
//       { url: "https://dog.ceo/api/img/sheepdog-english/n02105641_1966.jpg"},
//       { url: "https://dog.ceo/api/img/pembroke/n02113023_7062.jpg"},
//       { url: "https://dog.ceo/api/img/hound-blood/n02088466_9046.jpg"},
//       { url: "https://dog.ceo/api/img/coonhound/n02089078_237.jpg"},
//       { url: "https://dog.ceo/api/img/cairn/n02096177_4420.jpg"},
//       { url: "https://dog.ceo/api/img/saluki/n02091831_3616.jpg"},
//       { url: "https://dog.ceo/api/img/terrier-american/n02093428_3397.jpg"},
//       { url: "https://dog.ceo/api/img/corgi-cardigan/n02113186_9902.jpg"},
//       { url: "https://dog.ceo/api/img/terrier-toy/n02087046_5701.jpg"},
//       { url: "https://dog.ceo/api/img/lhasa/n02098413_7267.jpg"}
//     ];
//
//     return Promise.resolve(IMAGES);
//   }
// }
