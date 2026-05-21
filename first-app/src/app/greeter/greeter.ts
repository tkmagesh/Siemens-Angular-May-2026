import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.html',
  styleUrl: './greeter.css',
})
export class Greeter {
  
  /* 
  firstName = "Magesh"
  lastName = "Kuppan"

  message : string = "Have a good day!"

  onBtnClearClick(){
    // console.log('clear button clicked')
    this.message = '';
  } 
  */

  // using signals

  firstName = signal("Magesh")
  lastName = signal("Kuppan")
  message = signal("Have a good day!")

  messageLength = computed(() => this.message().length)
  
  onBtnClearClick() {
    console.log('clear button clicked')
    this.message.update((s:string) => '')
  }

  onPersonalClick(){
    this.message.update((s: string) => `${this.firstName()} ${this.lastName()} , Have a nice day!`)
  }
}
