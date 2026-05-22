import { Component, signal } from "@angular/core";
import { Child } from "./child";


@Component({
    selector : 'app-parent',
    template : `
        <div class="parent">
            <h3>Parent</h3>
            <div>This is the parent component</div>
            <app-child [currTime]="nowTime()" (updateTime)="onUpdateTime($event)"></app-child>
        </div>
    `,
    imports : [Child],
    styles: [ '.parent { border : 1px solid gray; padding : 20px  } ']
})
export class Parent {
    nowTime = signal(Date())
    
    onUpdateTime(s : string){
        console.log('Date received from child :', s)
        this.nowTime.update(() => Date())
    }
}