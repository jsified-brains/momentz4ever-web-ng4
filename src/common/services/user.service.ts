import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { USER } from '../interfaces';
import { AppConfig } from '../../appConfig';

@Injectable()
export class UserService{
    public oId: string;
    
    constructor(private http: Http){
    }

    public add(user: USER){
        return this.http
        .post(AppConfig.route('users'), user)
        .map((res: Response) => res.json());
    }

    public setOwnerId(id: string){
        this.oId=id;
        console.log("owner Id:"+this.oId);
    }

    public getOwnerId(){
        return this.oId;
    }
}
