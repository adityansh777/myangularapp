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
  // ⚠️ Issue: Should use "styleUrls" instead of "styleUrl"
  styleUrl: './todo.component.css',
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
    this.id = this.route.snapshot.params['id'];
    // Initialize the todo with default values; for new todos, id will be -1
    this.todo = new Todo(this.id, '', false, new Date());

    // If the id is not -1, fetch the todo to update
    if (this.id != -1) {
      this.todoService
        .retreiveTodo('in28minutes', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    // ⚠️ Issue: The logic here is reversed.
    // For a new todo (id === -1), you should call createTodo.
    // For an existing todo, you should call updateTodo.
    if (this.id != -1) {
      // Currently, calling createTodo for existing todos, which is incorrect.
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
      // create todo (this block should be for new todos, i.e., id === -1)
    } else {
      // Calling updateTodo for new todo, which is reversed.
      this.todoService
        .updateTodo('in28minutes', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
