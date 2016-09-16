import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private _http:Http) { }

  getItems() {
    return this._http.get('http://10.0.1.193:8000/api/customer/item?key=00402')
               .map(res => res.json());
  }

}
