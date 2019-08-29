import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissaoComponent } from './missao.component';

const routes: Routes = [
  { path: '' , component: MissaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissaoRoutingModule { }
