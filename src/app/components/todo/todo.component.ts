import { Component } from '@angular/core';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, DatePipe, NgIf],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'], // Correct property
})
export class TodoComponent {
  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Convert the id from the route parameter to a number
    this.id = +this.route.snapshot.params['id'];
    // Initialize the todo with default values; for a new todo, id should be -1
    this.todo = new Todo(this.id, '', false, new Date());
    // If editing an existing todo, load its data
    if (this.id !== -1) {
      this.todoService
        .retrieveTodo('in28minutes', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.id === -1) {
      // For a new todo, create it
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    } else {
      // For an existing todo, update it
      this.todoService
        .updateTodo('in28minutes', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
