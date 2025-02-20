import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';

// Todo model for the frontend; ensure properties match backend responses
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
  // ⚠️ Issue: Should use "styleUrls" (plural) instead of "styleUrl"
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todos: Todo[] = [];
  message: string | undefined;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute // Used to fetch route parameters if needed
  ) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    // Calling service to fetch all todos; note the misspelled method name.
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
    // Navigate to the update form with the todo ID
    this.router.navigate(['todos', id]);

    // This service call is optional if you already retrieve the todo in the update component.
    this.todoService.retreiveTodo('in28minutes', id).subscribe((todo: Todo) => {
      // Pre-fill form fields in the update component if needed.
    });
  }

  addTodo() {
    // Navigate to a new route to add a todo; using id -1 as a flag for new todos
    this.router.navigate(['todos', -1]);
  }
}
