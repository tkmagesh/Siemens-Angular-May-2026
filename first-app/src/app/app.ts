import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeter  } from "./greeter/greeter";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Greeter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
}
