import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeter  } from "./greeter/greeter";
import { Products } from "./products/products";
import { Parent } from './composition/parent';
import { Child } from './composition/child';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Greeter,
    Products,
    Parent,
    Child
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
  userSelection = signal('');
}
