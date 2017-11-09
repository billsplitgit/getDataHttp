import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Iusers, Iposts } from './ifcs';

@Injectable()
export class ProductsService {

  private _productUrl = 'assets/api/users.json'; // 'https://jsonplaceholder.typicode.com/users';
  private _postsUrl = 'assets/api/posts.json'; // 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private _httpc: HttpClient, private _http: Http) { }

  getUsers(): Observable<Iusers[]> {
  return this._httpc.get<Iusers[]>(this._productUrl)
 .do(data => console.log('All: ' + JSON.stringify(data)));
  }
  getPosts(): Promise<Iposts[]> {
    console.log('ppp: ' + this._httpc.get<Iposts[]>(this._postsUrl).toPromise());
    return this._httpc.get<Iposts[]>(this._postsUrl, ).toPromise();
  }
}
