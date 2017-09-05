import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import { Iusers } from "./products";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Iusers[];
  title = 'app';

  constructor(private _prodServ : ProductsService){}

  getUsers() : void{
      this._prodServ.getProducts().subscribe(data => this.users = data)
  }

  ngOnInit(){
      this.getUsers();
  }
}
