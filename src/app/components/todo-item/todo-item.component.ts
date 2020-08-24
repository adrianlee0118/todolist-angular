import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  //Added Input for passing arguments, EventEmitter and Output for sending delete operation arguments to parent Todos component
import { TodoService } from '../../services/todo.service'; //Imported API handler to make post requests onToggle

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;       //receive arguments from parent - square brackets [] in parent Todos component's HTML
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); //send arguments to parent via an event - $event in parent Todos component's HTML

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set dynamic class binding
  setClasses() {
    let classes = {
      todo: true,        //todo class always added, so true
      'is-complete': this.todo.completed   //set when completed of todo prop is true
    }
    return classes
  }

  //Event handling set on input and button fields
  onToggle(todo) {
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server - asynchronous post request, use subscribe to do further operations on the result
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  //Deleting - need to access UI in Todos component above -> need to emit upwards
  onDelete(todo) {
    //When delete pressed, emits the todo from the component, which is accessible from upper Todos component's HTML file, as indicated by [deleteTodo]
    this.deleteTodo.emit(todo);
  }
}
