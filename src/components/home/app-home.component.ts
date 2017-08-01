import { Component , OnInit,  ChangeDetectorRef } from '@angular/core';
import { Album } from '../../common/Interfaces/album';
import { AlbumService } from '../../common/services/albums.service';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class HomeComponent{
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

    public currentView;

    public setView(view:string){  
        if (view === 'gridView') 
            this.currentView = true;
        else{
        if (view === 'listView') 
            this.currentView = false;
        }
        this.getAlbums();
    }

    // ngOnInit(){
    //     // this.getAlbums();
    //     this.currentView;
    // }
}
