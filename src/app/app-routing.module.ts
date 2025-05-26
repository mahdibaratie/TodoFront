

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonDetailsComponent } from './person-details/person-details.component';
import { TodoitemsDetailComponent } from './todoitems-detail/todoitems-detail.component';

export const routes: Routes = [
  { path: 'person-details', component: PersonDetailsComponent },
  { path: 'todoitems', component: TodoitemsDetailComponent },
  { path: '', redirectTo: '/todoitems', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
