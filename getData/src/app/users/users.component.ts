import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iusers } from '../ifcs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _prodServ: ProductsService) {  }
  users: Iusers[];

  getUsers(): void {
    this._prodServ.getUsers().subscribe(data => this.users = data);
}

  ngOnInit() {
    this.getUsers();
  }

}
