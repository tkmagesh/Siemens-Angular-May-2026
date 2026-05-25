
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Users</h2>
    <a [routerLink]="['/users', 1]">User 1</a> <br/>
    <a [routerLink]="['/users', 2]">User 2</a> <br/>
    <a [routerLink]="['/users', 3]">User 3</a> <br/>
    <a [routerLink]="['/users', 4]">User 4</a> <br/>

  `
})
export class UsersComponent {}
