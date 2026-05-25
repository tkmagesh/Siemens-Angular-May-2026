import { HttpClient } from "@angular/common/http";
import { Component, signal } from "@angular/core";
import { UserInputModel, UserModel } from "./user-model";
import { from, Observable } from "rxjs";
import { AsyncPipe, JsonPipe } from "@angular/common";

@Component({
    selector : "app-users",
    imports : [AsyncPipe, JsonPipe],
    template: `
        <div>
            <h3>Users</h3>
            <div>
                <label for="">Name :</label>
                <input type="text" (input)="newUser.update(u => ({...u, name :$any($event.target).value}))"/>
                <label for="">Email :</label>
                <input type="text" (input)="newUser.update(u => ({...u, email: $any($event.target).value}))"/>
                <button (click)="onBtnAddClick()">Add New</button>
                <div>{{newUser() | json}}</div>
            </div>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    @for (user of user$ | async; track user.id) {
                        <tr>
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>`
})
export class Users {

    user$ : Observable<UserModel[]> = from([])
    newUser = signal<UserInputModel>({ name : '', email : ''})

    constructor(private httpClient : HttpClient){
        this.user$ = this.httpClient
            .get<UserModel[]>('http://localhost:3000/users')
    }

    onBtnAddClick(){
        this.httpClient
            .post<UserModel>('http://localhost:3000/users', this.newUser())
            .subscribe(userCreated => console.log(userCreated))
    }

}