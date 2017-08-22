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
         .map((response: Response) => response.json());
         
     }
}
