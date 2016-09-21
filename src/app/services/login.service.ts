import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private _http:Http) { }

  checkUser(formData: any) {
    return this._http.get( "http://localhost:8000/api/user/" + formData.username + "/login?pass=" + formData.password )
               .map( res => res.json() );
  }

}
