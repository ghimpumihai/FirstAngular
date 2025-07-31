import { Component, signal } from '@angular/core';
import {GreetingComponent } from '../components/greeting-component/greeting';
import {CounterComponent } from '../components/counter-component/counter';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage =signal('Welcome to the Home Page!');
  keyUpHandler(event: KeyboardEvent){
    console.log(`Key pressed: ${event.key}`);
  }
}
