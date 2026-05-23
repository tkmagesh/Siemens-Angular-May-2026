import { Component,  signal, WritableSignal  } from '@angular/core';

import { Product } from './models/Product';
import { ProductsStats } from './components/products-stats';
import { ProductEditor } from './components/product-editor';
import { ProductsList } from './components/products-list';
import { ProductsService } from './services/products-service';
import { ProductsServiceV2 } from './services/products-service-v2';
import { IProductsService } from './services/Iproducts-services';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [ ProductsStats, ProductEditor, ProductsList],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers : [
    { provide : ProductsService, useClass : ProductsServiceV2 }
  ]
})
export class Products {
  

  constructor(public svc : ProductsService, private http: HttpClient){
    
  }

  onBtnGetData(){
    this.http
      .get<Product[]>('http://localhost:3000/products')
      .subscribe(data => console.table(data))
  }

  onProductCreated(newProduct : Product){
    this.svc.addNew(newProduct)
  }
}
