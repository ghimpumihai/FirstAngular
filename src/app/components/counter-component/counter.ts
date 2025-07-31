import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class CounterComponent {
  counterValue=signal(0);
  Increment() {
    console.log('Increment button clicked');
    this.counterValue.update((value) => value + 1);
  }
  Decrement() {
    console.log('Decrement button clicked');
    this.counterValue.update((value) => value - 1);
  }
  Reset() {
    console.log('Reset button clicked');
    this.counterValue.set(0);
  }
}
