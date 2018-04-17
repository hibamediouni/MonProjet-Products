import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductsListService {
   data : Product[] =  [ {code: 'P1000', nom: 'Café', prixUnitaire: 1500.5},
   {code: 'P2000', nom: 'the', prixUnitaire: 1600.6},
   {code: 'P3000', nom: 'sucre', prixUnitaire: 1700.5}
 ];
  constructor() { }
  getAllProducts(): Product[] {
    return this.data;
  }

}
