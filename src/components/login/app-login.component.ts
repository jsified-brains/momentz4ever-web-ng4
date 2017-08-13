import { Component } from '@angular/core';
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


    constructor(private router: Router, private userService: UserService){
    }

    public onLoginClick(){

        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                this.getUserDetails();
            }
            else {
                FB.login((loginResponse)=>{
                    this.getUserDetails();
                }, {scope: this.fbApiPermission.join(',')});
            }
        });
    }

    public getUserDetails(){
        FB.api('/me', {fields: this.userFields}, (details) => {
            this.userService
            .add(details)
            .subscribe(responseData => {
                this.router.navigate(['./home']);
            }, 
            error => console.log(error));           
        });
    }
}
