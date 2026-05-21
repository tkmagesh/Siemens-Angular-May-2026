import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.css',
})
export class Greeter {
  firstName : string = "Magesh"
  lastName : string = "Kuppan"
  message : string = "Have a good day!"

  onBtnClearClick(){
    // console.log('clear button clicked')
    this.message = '';
  }

}
