import { Component,  signal, WritableSignal  } from '@angular/core';

import { Product } from './models/Product';
import { ProductsStats } from './components/products-stats';
import { ProductEditor } from './components/product-editor';
import { ProductsList } from './components/products-list';
import { ProductsService } from './services/products-service';
import { ProductsServiceV2 } from './services/products-service-v2';
import { IProductsService } from './services/Iproducts-services';
import { HttpClient } from '@angular/common/http';
import { filter, from, map, Observable } from 'rxjs';
import { ProductsAPIService } from './services/products-api-service';

@Component({
  selector: 'app-products',
  imports: [ ProductsStats, ProductEditor, ProductsList],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers : [
    ProductsAPIService
  ]
})
export class Products {
  
  products$ : Observable<Product[]> = from([])

  constructor(public svc : ProductsAPIService){
    this.products$ = this.svc
      .getAll()
      .pipe(map(ps => ps.filter(p => p.category === 'Electronics')))
  }

  onBtnGetData(){
    
      
  }

  onProductCreated(newProduct : Product){
    //this.svc.addNew(newProduct)
  }
}
