import { Component, input, output } from "@angular/core";


@Component({
    selector: 'app-child',
    template: `
        <div class="child">
            <h3>Child</h3>
            <div>This is the child component</div>
            <div>Current Time : {{currTime()}}</div>
            <button (click)="onUpdateClick()">Update</button>
        </div>
    `,
    styles: ['.child { border : 1px solid gray } ']
})
export class Child {
    currTime = input('[current time]')
    updateTime = output<string>();

    onUpdateClick(){
        this.updateTime.emit('update time pls')
    }

}