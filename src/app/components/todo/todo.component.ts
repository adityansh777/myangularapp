import { Component } from '@angular/core';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { JwtAuthenticationService } from '../../services/auth/jwt-authentication.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, DatePipe, NgIf],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'], // Correct property
})
export class TodoComponent {
  id!: number;
  todo!: Todo;
  username!: '';

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: JwtAuthenticationService
  ) {}

  ngOnInit() {
    // Convert the id from the route parameter to a number
    this.id = +this.route.snapshot.params['id'];
    // Initialize the todo with default values; for a new todo, id should be -1
    this.todo = new Todo(this.id, '', false, new Date());
    // If editing an existing todo, load its data
    if (this.id !== -1) {
      this.todoService
        .retrieveTodo(this.authservice.getAuthusername()!, this.id)
        .subscribe((data) => (this.todo = data));
    }
  }
  // username = String | undefined;

  saveTodo() {
    if (this.id === -1) {
      // For a new todo, create it
      this.todoService
        .createTodo(this.authservice.getAuthusername()!, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    } else {
      // For an existing todo, update it
      this.todoService
        .updateTodo(this.authservice.getAuthusername()!, this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
