import { Component,  signal, WritableSignal  } from '@angular/core';

import { Product } from './models/Product';
import { ProductsStats } from './components/products-stats';
import { ProductEditor } from './components/product-editor';
import { ProductsList } from './components/products-list';
import { ProductsService } from './services/products-service';

@Component({
  selector: 'app-products',
  imports: [ ProductsStats, ProductEditor, ProductsList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  
  constructor(public svc : ProductsService){
    
  }

  onProductCreated(newProduct : Product){
    this.svc.addNew(newProduct)
  }
}
