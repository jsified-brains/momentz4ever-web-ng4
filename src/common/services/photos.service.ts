import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService{
     private url: string = 'http://localhost:1337/photos';

     constructor(private http: Http){
     }

     getPhotos(id: string){
        const urlWithId = this.url +"/" +id;
       return  this.http
         .get(urlWithId)
         .map( (response: Response) => response.json());
         
     }
}