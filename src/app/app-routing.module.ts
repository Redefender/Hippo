import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonComponent } from './components/person/person.component';


const routes: Routes = [
  { path: '', component: AddPersonComponent },
  { path: 'new', component: AddPersonComponent },
  { path: 'person/:id', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
