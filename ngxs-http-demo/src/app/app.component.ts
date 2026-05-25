
import { Component, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchUsers, AddUser } from './state/user.actions';
import { User, UserState } from './state/user.state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>NGXS HTTP Demo</h2>

    <button (click)="load()">Load Users</button>

    <ul>
      <li *ngFor="let u of users$ | async">
        <span>{{u.name}} - {{u.email}} </span>
        <button (click)="onUserRemove(u)">X</button>
      </li>
    </ul>

    <input placeholder="New user" (input)= "name.set($any($event.target).value)" />
    <input placeholder="Email" (input)= "email.set($any($event.target).value)" />
    <button (click)="add()">Add</button>
  `
})
export class AppComponent {
  
  users$: Observable<any[]> = this.store.select(UserState.getUsers);
  name = signal('');
  email = signal('');

  constructor(private store: Store) {}

  load() {
    this.store.dispatch(new FetchUsers());
  }

  add() {
    this.store.dispatch(new AddUser({ name: this.name(), email : this.email() }));
  }

  onUserRemove(u : User){
    console.log('to be removed - ', u)
  }
}
