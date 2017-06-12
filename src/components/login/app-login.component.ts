import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './app-login.component.html'
})
export class LoginComponent {
    constructor(private router: Router){
    }

    public onLoginClick(){
        this.router.navigate(['./home']);
    }
}
