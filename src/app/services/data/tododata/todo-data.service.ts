import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../../components/list-todos/list-todos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retreiveAllTodos(username: String): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }
}
