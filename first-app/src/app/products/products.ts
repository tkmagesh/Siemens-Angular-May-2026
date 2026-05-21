import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productNames = signal<string[]>([])
  newProductName = signal('')
  onAddClick(){
    this.productNames.update(pns => [...pns, this.newProductName()])
    this.newProductName.update(() => '')
  }
}
