import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http, @Inject('apiBase') private _apiBase: string) { }

}
