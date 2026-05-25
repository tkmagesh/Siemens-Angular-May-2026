import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeter  } from "./greeter/greeter";
import { Products } from "./products/products";
import { Parent } from './composition/parent';
import { Child } from './composition/child';
import { ProductsService } from './products/services/products-service';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Greeter,
    Products,
    Parent,
    Users
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[ProductsService]
})
export class App {
  protected readonly title = signal('first-app');
  userSelection = signal('');
  
  productsCount = computed(() => this.productsService.products().length)
  
  constructor(private productsService : ProductsService){
    
    
  }
}
