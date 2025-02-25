import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../../components/list-todos/list-todos.component';
import { Observable } from 'rxjs';
import { TODO_JPA_API_URL } from '../../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): Observable<any> {
    return this.http.delete(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      { responseType: 'text' }
    );
  }

  retrieveTodo(username: string, id: number): Observable<Todo> {
    return this.http.get<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo
    );
  }
}
