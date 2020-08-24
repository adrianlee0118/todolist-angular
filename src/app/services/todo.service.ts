import { Injectable } from '@angular/core';   //allows for service to be injected into a constructor in a component
import { Observable } from 'rxjs';     //Enable asynchronous data formats
import { HttpClient, HttpHeaders } from '@angular/common/http'; //module for making http requests to and from some URI like axios or fetch

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }  //HttpClient module service added to handle API calls

  //Get Todos
  getTodos():Observable<Todo[]> {   //Observable returned indicates data asynchronously fetched like with JS promises
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Toggle completed
  toggleCompleted(todo: Todo):Observable<any> {  //observable async data returned is type any because the format is different from a Todo (also includes id from json placeholder, which we didn't include in the Todo interface model)
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);  //Send the URL, the todo item (for the subscribe method on the other end), HTTP header for put request
  }

  //Delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{    //return type Todo is wrapped in Observable to indicate it is asynchronous data
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
