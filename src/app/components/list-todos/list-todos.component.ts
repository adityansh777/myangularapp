import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtAuthenticationService } from '../../services/auth/jwt-authentication.service';

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
  imports: [NgFor, DatePipe, NgIf, CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'], // Correct property name
})
export class ListTodosComponent {
  todos: Todo[] = [];
  message: string | undefined;
  username: string | undefined;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute,
    private autheservice: JwtAuthenticationService
  ) {}

  ngOnInit() {
    this.refreshTodos();
    // this.username = this.autheservice.getAuthusername()!;
  }

  refreshTodos() {
    this.username = this.autheservice.getAuthusername()!;
    this.todoService.retrieveAllTodos(this.username).subscribe((response) => {
      console.log('Todos retrieved:', response);
      this.todos = response;
    });
  }

  deleteTodo(id: number) {
    this.username = this.autheservice.getAuthusername()!;
    this.todoService.deleteTodo(this.username, id).subscribe(
      (response) => {
        console.log(`Delete todo invoked for ${id}:`, response);
        this.message = `Delete successful for todo ${id}`;
        this.refreshTodos();
      },
      (error) => {
        console.error('Error during delete:', error);
        this.message = `Delete failed for todo ${id}`;
      }
    );
  }

  updateTodo(id: number) {
    // Navigate to the update form with the todo ID
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    // Navigate to a new route to add a todo; using id -1 as a flag for new todos
    this.router.navigate(['todos', -1]);
  }
}
