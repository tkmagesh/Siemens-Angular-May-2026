import { Component,  signal, WritableSignal  } from '@angular/core';

import { Product } from './models/Product';
import { ProductsStats } from './components/products-stats';
import { ProductEditor } from './components/product-editor';
import { ProductsList } from './components/products-list';
import { ProductsService } from './services/products-service';
import { ProductsServiceV2 } from './services/products-service-v2';
import { IProductsService } from './services/Iproducts-services';

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
  // public svc : ProductsService;

  constructor(public svc : ProductsService){
    // this.svc = svc  
  }

  onProductCreated(newProduct : Product){
    this.svc.addNew(newProduct)
  }
}
