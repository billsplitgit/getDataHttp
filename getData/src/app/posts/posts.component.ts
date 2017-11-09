import { Component, OnInit } from '@angular/core';
import { Iposts } from '../ifcs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Iposts[];
  constructor(private _prodServ: ProductsService) {}

  getPosts(): void {
      this._prodServ.getPosts().then(data => this.posts = data);
      console.log('jsonData:)', this._prodServ.getPosts().then(data => this.posts = data) );
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.getPosts();
    }

}
