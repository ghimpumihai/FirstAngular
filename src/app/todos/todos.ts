import { Component,inject, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  todoService= inject(TodosService);

  ngOnInit(): void {
      
  }
}
