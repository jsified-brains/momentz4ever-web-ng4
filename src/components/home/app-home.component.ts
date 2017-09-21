import { ViewChild, Component , OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../common/Interfaces';
import { AlbumService } from '../../common/services';
import { Photo } from '../../common/Interfaces';
import { PhotoService, UserService } from '../../common/services';
// import { LoginComponent } from '../login/app-login.component';

@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})

export class HomeComponent{
    @ViewChild('fileInput') fileInput:ElementRef;
    public ownerId: string;
    albums: Album[] =[];
    imgSrc :any;
    
    constructor(private router: Router,private albumService: AlbumService, private ref: ChangeDetectorRef, 
    private photoService: PhotoService, private userService: UserService,private element:ElementRef){
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
        this.ownerId=this.userService.getOwnerId();
        let title=this.element.nativeElement.querySelector('#title').value;
        let description= this.element.nativeElement.querySelector('#description').value;
        let files=this.element.nativeElement.querySelector('#selectFile').files;
        let file=files[0];
        let coverImage=file.name;
        // Create an Album Object first
        let albumId = '';
        this.albumService.addAlbum({ownerId:this.ownerId,title, description, coverImage}).subscribe(res => {   
            if(res)  
            {    
                albumId = res._id;
                let formData=new FormData();
                formData.append('ownerId',this.ownerId);
                formData.append('albumId',albumId);
                for(let i=0;i<files.length;i++){
                    formData.append('selectFile',files[i], files[i].name);
                }    
                this.photoService.uploadImage(formData).subscribe(res1 => { 
                    if(res1)  
                    {    
                       this.fileInput.nativeElement.click();
                        window.alert("Photos Uploaded Succesfully!");           
                    }
                });   
            }
        });   
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
