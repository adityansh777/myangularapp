import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  imports: [NgFor],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todo = {
    id: 1,
    desc: 'Learn to Dance',
  };
  todos = [
    { id: 1, desc: 'Learn to Dance' },
    { id: 2, desc: 'Learn to Dance22' },
    { id: 3, desc: 'Learn to Dance333' },
  ];
}
