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
        console.log("calling get album service");
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
        this.getAlbums();  
        if (view === 'listView')
            
            this.currentView = 'listView';
        else{
        if (view === 'gridView') 
            
            this.currentView = 'gridView';
        }
    }

    public onViewClick(album){  
        this.router.navigate(['./album',album._id]);
    }

    // ngOnInit(){
    //     console.log("calling get album");
    //     this.getAlbums();

    // }
}
