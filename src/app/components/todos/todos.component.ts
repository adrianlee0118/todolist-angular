import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';  //added Todo interface

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { } //Import data fetching service (which itself imports an API call service)

  ngOnInit(): void {
    //Get data using service and store in member variable todos (which can be encoded in this component's html)
    //Subscribe (like .then) is used to get the result from the aynchronous data stream since getTodos() returns an observable (like a JS promise)
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo){  //This argument is caught from child TodoItem component's emitted event (which contains a todo) after a delete button is clicked, as indicated in Todos component's HTML
    //Update UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Update server
    this.todoService.deleteTodo(todo).subscribe();  //subscribe blank, because nothing returned after delete
  }

  //add-app-todo component on HTML catches event emissions (triggered from onSubmit in the component) containing new Todos and invokes this addTodos method with the emitted todo
  addTodo(todo:Todo){
    //The API handler adds the todo to the server
    this.todoService.addTodo(todo).subscribe(todo => {
      //If/when the promise is resolved, add the todo to the UI
      this.todos.push(todo);
    });
  }
}
