import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private _http:Http) { }

  getItems(id: string) {
    return this._http.get('http://localhost:8000/api/customer/item?id={id}')
               .map(res => res.json());
  }

}
