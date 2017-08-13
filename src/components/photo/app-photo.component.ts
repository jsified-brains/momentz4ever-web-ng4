import { Component , OnInit,  ChangeDetectorRef } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { Photo } from '../../common/Interfaces';
import { PhotoService } from '../../common/services';

@Component({
    selector: 'app-photo',
    templateUrl: './app-photo.component.html'
})

export class PhotoComponent{
    private id: string;
    photos: Photo[] =[];

    constructor(private route: ActivatedRoute,private router: Router,private photoService: PhotoService, private ref: ChangeDetectorRef){
    }

    getPhotos(){
        
         this.photoService
        .getPhotos(this.id)
        .subscribe(responseData => {
            this.photos = responseData;
            this.ref.detectChanges();
        },
        error => console.log(error));
    }

    public currentView='thumbnailView';

    public setView(view:string){  
        if (view === 'thumbnailView') 
            this.currentView = 'thumbnailView';
        else{
        if (view === 'cardView') 
            this.currentView = 'cardView';
        }
    }

    onCommentClick(photo){
        photo.commentArea=true;
    }

    private handleKeyDown(event: any,photo)
    {
        if (event.keyCode == 13)
        {
            photo.comment++;
            photo.commentArea=false;
        }
    }
    onLikeClick(photo){
        photo.likeCount++;
    }

    ngOnInit(){
        
        this.id= this.route.snapshot.paramMap.get('albumId');
        this.getPhotos();
    }
}
