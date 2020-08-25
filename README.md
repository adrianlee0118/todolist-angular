## About

Simple but functionally-comprehensive Angular todo app demonstrating:
- passing of arguments using Input (all components)
- emission of arguments from a component using Output and EventEmitter modules (TodoItem, AddItem components) and catching of the emission event and its contained arguments by parent components (Todos component HTML containing rendered AddTodo and TodoItem catches respective add and toggle/delete events, which are processed with CRUD requests sent to TodoService for execution)
- utilization and compartmentalization of asynchronous CRUD calls to a REST API using HttpModule and Observables (TodoService component, imports in App module)
- conditional rendering using NgClass (TodoItem component HTML/CSS)
- two-way data binding using NgModel (FormsModule import in app module)/Input/Output modules, and 
- simple routing in App Route Modules file, with router links placed in the header

![lookit](https://github.com/adrianlee0118/todolist-angular/blob/master/assets/demo.gif)

## Tech

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
