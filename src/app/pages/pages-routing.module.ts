import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'homeworks-crud',
    pathMatch: 'full'
  },
  {
    path: 'homeworks-crud',
    component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
