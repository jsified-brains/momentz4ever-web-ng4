import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Photo } from '../interfaces';
import { AppConfig } from '../../appConfig';

@Injectable()
export class PhotoService{
     constructor(private http: Http){
     }

     getPhotos(id:string){
       const photoWithId = 'photos' +"/" +id;
        return  this.http
         .get(AppConfig.route(photoWithId))
         .map((response: Response) => response.json());
         
     }

     uploadImage(formdata:any){
       return this.http
        .post(AppConfig.route('photos/uploads'), formdata)
        .map((res: Response) => res.json());
     }
}


// import { Http, Response } from '@angular/http';
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class PhotoService{
//      private url: string = 'http://localhost:1337/photos';

//      constructor(private http: Http){
//      }

//      getPhotos(id: string){
//         const urlWithId = this.url +"/" +id;
//        return  this.http
//          .get(urlWithId)
//          .map( (response: Response) => response.json());
         
//      }
// }