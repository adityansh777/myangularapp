import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
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
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn to Dance22', false, new Date()),
    new Todo(3, 'Learn to Dance333', false, new Date()),
  ];
}
