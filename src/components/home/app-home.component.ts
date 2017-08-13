import { Component , OnInit,  ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../common/interfaces';
import { AlbumService } from '../../common/services/albums.service';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class HomeComponent{
    albums: Album[] =[];

    constructor(private router: Router,private albumService: AlbumService, private ref: ChangeDetectorRef){
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

    public currentView='gridView';

    public setView(view:string){  
        if (view === 'listView') 
            this.currentView = 'listView';
        else{
        if (view === 'gridView') 
            this.currentView = 'gridView';
        }
    }

    public onViewClick(album){  
        this.router.navigate(['./photo',album.albumId]);
    }

    ngOnInit(){
        this.getAlbums();
    }
}
