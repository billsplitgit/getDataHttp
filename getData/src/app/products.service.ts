import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Iusers } from "./products";

@Injectable()
export class ProductsService {

  private _productUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http : HttpClient) { }

  getProducts() : Observable<Iusers[]>{
  return this._http.get<Iusers[]>(this._productUrl)
  .do(data => console.log('All: ' + JSON.stringify(data)));
  }

}
