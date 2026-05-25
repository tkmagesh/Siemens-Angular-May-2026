
import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';

export const USERS_ROUTES: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserDetailComponent }
];
