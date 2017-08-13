import { Component,  ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../common/services'

@Component({
    selector: 'app-login',
    templateUrl: './app-login.component.html'
})
export class LoginComponent {
    public userDetails: string;
    public userDetailsFromDB: any;
    public userFields: string[] = [
        'id',
        'name',
        'first_name',
        'middle_name',
        'last_name',
        'picture',
        'email'
    ];
    public fbApiPermission: string[] = [
        'email', 'user_about_me',
    ];


    constructor(private router: Router, private ref: ChangeDetectorRef, private userService: UserService){
    }

    public onLoginClick(){
        //this.router.navigate(['./home']);
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                this.getUserDetails();
            }
            else {
                
                FB.login((loginResponse)=>{
                    console.log('FB response=', loginResponse);
                    this.getUserDetails();
                    
                }, {scope: this.fbApiPermission.join(',')});
            }
        });
    }

    public getUserDetails(){
        FB.api('/me', {fields: this.userFields}, (details) => {
            console.log('got user details=');
            console.log(details);
            this.userDetails = JSON.stringify(details);

            this.ref.detectChanges();


            // this.userDetails = JSON.stringify(details);
            this.userService
            .add(details)
            .subscribe(responseData => {
                this.userDetailsFromDB = responseData.email;
               // this.router.navigate(['./home']);
            }, 
            error => console.log(error));           
        });
    }
}
