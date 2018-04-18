import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsListService {

   URL: string = 'http://localhost:3000/posts';
   /* [ {code: 'P1000', nom: 'Café', prixUnitaire: 1500.5},
   {code: 'P2000', nom: 'the', prixUnitaire: 1600.6},
   {code: 'P3000', nom: 'sucre', prixUnitaire: 1700.5}
 ];*/
  constructor(private _service: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
   return this._service.get<Product[]>(this.URL);


    // return this.data;
  }

}
