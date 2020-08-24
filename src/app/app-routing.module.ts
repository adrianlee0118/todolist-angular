import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';   //Imported for 'localhost:4200'
import { AboutComponent } from './components/pages/about/about.component'; //Imported for 'localhost:4200/about'


//Keys: URL suffixes, component: component that renders in <router-outlet></router-outlet> depending on the specified url
const routes: Routes = [
  { path: '', component: TodosComponent }, //blank path means Angular's default localhost:4200 with no suffixes
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
