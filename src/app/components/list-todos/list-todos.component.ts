import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Router } from '@angular/router';

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
  imports: [NgFor, DatePipe, NgIf],
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
  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retreiveAllTodos('in28minutes').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id: any) {
    this.todoService.deleteTodo('in28minutes', id).subscribe((response) => {
      console.log(response);
      console.log(`Delete todo invoked for ${id}`);
      this.message = `Delete successful ${id}`;
      this.refreshTodos();
    });
  }

  updateTodo(id: any) {
    // this.todoService.updateTodo('in28minutes', id).subscribe((response) => {
    //   console.log(response);
    //   console.log(`update todo invoked for ${id}`);
    //   this.message = `update successful ${id}`;
    //   this.refreshTodos();
    // });
    console.log('updateTodo invoked');

    this.router.navigate(['todos', id]);
  }

  message: string | undefined;
}
