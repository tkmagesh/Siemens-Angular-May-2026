
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './state/user.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private base = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.base);
  }

  addUser(data: any) : Observable<User>{
    return this.http.post<User>(this.base, data);
  }
}
