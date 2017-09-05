import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import { Iusers, Iposts } from "./products";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: Iusers[];
  posts: Iposts[];
  title = 'app';

  constructor(private _prodServ : ProductsService){}

  getUsers() : void{
      this._prodServ.getUsers().subscribe(data => this.users = data)
  }

  getPosts(): void {
    this._prodServ.getPosts().then(data => this.posts = data)
    console.log('jsonData:)', this._prodServ.getPosts().then(data => this.posts = data) )
  }

  ngOnInit(){
      this.getUsers();
      this.getPosts();
  }
}
