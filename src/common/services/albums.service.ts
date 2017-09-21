import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Album } from '../interfaces';
import { AppConfig } from '../../appConfig';

@Injectable()
export class AlbumService{
     constructor(private http: Http){
     }

     getAlbums(){
        return  this.http
         .get(AppConfig.route('albums'))
         .map((response: Response) => {
            console.log("Data",response); 
            return response.json();

        });
         
     }

     addAlbum(formdata:any){
        return this.http
        .post(AppConfig.route('albums'), formdata)
        .map((res: Response) => res.json());
     }

    //  getAlbumsCoverImage(id:string){
    //     const photoWithId = 'albums' +"/" +id;
    //      return  this.http
    //       .get(AppConfig.route(photoWithId))
    //       .map((response: Response) => response.json());
          
    //   }
     
}
