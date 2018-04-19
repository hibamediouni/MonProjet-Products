import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  code: string;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  // this.code = this._route.snapshot.params['id'];      // with snapshot
  this._route.params.
  subscribe( parametres => this.code = parametres['id']);  // with observable : params est observable , on fait seulement subscribe
  }

}
