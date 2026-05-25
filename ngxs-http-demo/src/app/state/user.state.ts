
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { FetchUsers, AddUser } from './user.actions';
import { tap } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: { users: [] }
})
@Injectable()
export class UserState {
  constructor(private userService: UserService) {}

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(FetchUsers)
  fetchUsers(ctx: StateContext<UserStateModel>) {
    return this.userService.getUsers().pipe(
      tap(users => ctx.patchState({ users }))
    );
  }

  @Action(AddUser)
  addUser(ctx: StateContext<UserStateModel>, action: AddUser) {
    return this.userService.addUser(action.payload).pipe(
      tap(user => {
        const state = ctx.getState();
        ctx.patchState({ users: [...state.users, user] });
      })
    );
  }
}
