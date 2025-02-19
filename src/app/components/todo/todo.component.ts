import { Component } from '@angular/core';
import { TodoDataService } from '../../services/data/tododata/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  id!: number;
  todo!: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todoService
      .retreiveTodo('in28minutes', this.id)
      .subscribe((data) => (this.todo = data));
  }
}
