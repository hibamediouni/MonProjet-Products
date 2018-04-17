import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: Product[];
  constructor() {
    this.data = [ {code: 'P1000', nom: 'Café', prixUnitaire: 1500.5},
                  {code: 'P2000', nom: 'the', prixUnitaire: 1600.5},
                  {code: 'P3000', nom: 'sucre', prixUnitaire: 1700.5}
                ];
              }

  ngOnInit() {
  }

}
