import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  imports: [NgFor, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todos: Todo[] = [];
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn to Dance22', false, new Date()),
  //   new Todo(3, 'Learn to Dance333', false, new Date()),
  // ];

  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn to Dance22', false, new Date()),
  //   new Todo(3, 'Learn to Dance333', false, new Date()),
  // ];
  constructor(private todoService: TodoDataService) {}

  ngOnInit() {
    this.todoService.retreiveAllTodos('in28minutes').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id: any) {
    console.log(`Delete todo invoked for ${id}`);
  }
}
