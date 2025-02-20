import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../../components/list-todos/list-todos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  // Note: "retreive" is misspelled; it should be "retrieve"
  retreiveAllTodos(username: String): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  deleteTodo(username: String, id: any) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  retreiveTodo(username: String, id: any) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  updateTodo(username: String, id: number, todo: Todo) {
    return this.http.put<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  // ⚠️ Issue: createTodo is using HTTP PUT to a URL (without an ID) that does not
  // exist in your backend. Typically, creating a new resource uses POST.
  // In todo-data-service.ts

  createTodo(username: String, todo: Todo) {
    return this.http.post<Todo>(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
