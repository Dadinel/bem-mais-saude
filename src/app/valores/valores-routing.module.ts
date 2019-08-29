import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValoresComponent } from './valores.component';

const routes: Routes = [
  { path: '' , component: ValoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoresRoutingModule { }
