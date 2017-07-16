import { Component , OnInit,  ChangeDetectorRef } from '@angular/core';
import { Album } from '../../common/Interfaces/album';

import { AlbumService } from '../../common/services/albums.service';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class HomeComponent implements OnInit {
    albums: Album[] =[];

    constructor(private albumService: AlbumService, private ref: ChangeDetectorRef){
    }

    getAlbums(){
         this.albumService
        .getAlbums()
        .subscribe(responseData => {
            this.albums = responseData;
            this.ref.detectChanges();
        },
        error => console.log(error));
    }

    ngOnInit(){
        this.getAlbums();
    }
}
