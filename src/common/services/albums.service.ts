import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService{
     private url: string = 'http://localhost:1337/albums';

     constructor(private http: Http){
     }

     getAlbums(){
       return  this.http
         .get(this.url)
         .map( (response: Response) => response.json());
         
     }
}
