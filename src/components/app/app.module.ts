import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../../common/components/app-header/app-header.component';
import { LoginComponent } from '../../components/login/app-login.component';
import { HomeComponent } from '../../components/home/app-home.component';   
import { PhotoComponent } from '../../components/photo/app-photo.component';
import { AlbumService, PhotoService, UserService } from '../../common/services';



const ROUTES: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'photo/:albumId', component: PhotoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    HomeComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AlbumService,
    PhotoService,
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }