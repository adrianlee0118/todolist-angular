import { Component, OnInit, EventEmitter, Output } from '@angular/core';  //EventEmitter and Output added to allow emitting of data upwards from component (sending added todo to Todos component)

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo:EventEmitter<any> = new EventEmitter();   //type: any once again because no id -- format does not exactly match Todo, which when created automatically generates an id
  title:string;  //Bound to HTML input form through [(ngModel)] - square bracket and parentheses together indicate two-way data binding
  //Note: ngModel-bound data updates in real-time as input changes!

  constructor() { }

  ngOnInit(): void {
  }

  //Submit todo - note: HTML file uses (ngSubmit) for the event handler which already includes event.preventDefault() to mitigate native browser refresh behavior on all input field changes
  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
