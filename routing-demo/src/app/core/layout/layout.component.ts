
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Routing Demo</h1>
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/users">Users</a> |
      <a routerLink="/admin">Admin</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent {}
