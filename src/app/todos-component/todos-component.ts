import { Component,inject, OnInit,signal } from '@angular/core';
import { catchError, combineLatest } from 'rxjs';
import { TodosService } from '../services/todos-service';
import { Todo } from '../../model/todo.type';
import { TodoItem } from '../components/todo-item-component/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule,FilterTodosPipe],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.scss'
})
export class TodosComponent implements OnInit{
  todoService= inject(TodosService);
  todoItems=signal<Array<Todo>>([]);
  searchTerm=signal('')

  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe(catchError((error) => {
      console.log(error);
      throw error;
    })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos)=> {
      return todos.map((todo) => {
        if(todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    });
  }
}
