import { Component , OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../common/Interfaces';
import { AlbumService } from '../../common/services';
import { Photo } from '../../common/Interfaces';
import { PhotoService } from '../../common/services';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class HomeComponent{
    albums: Album[] =[];

    constructor(private router: Router,private albumService: AlbumService, private ref: ChangeDetectorRef,
    private photoService: PhotoService, private element:ElementRef){
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

    public uploadImage(){
        // this.element.nativeElement.querySelector('#spinner').style.visibility='visible';
        let files=this.element.nativeElement.querySelector('#selectFile').files;
        let formData=new FormData();
        let file=files[0];
        formData.append('selectFile',file,file.name);
        this.photoService.uploadImage(formData).subscribe();
    }

    // private dataLoaded(data:any){
    //     this.element.nativeElement.querySelector('#spinner').style.visibility='hidden';
    // }

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
