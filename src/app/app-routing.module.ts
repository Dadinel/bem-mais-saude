import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ''
  , loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  }
  ,
  {
    path: 'home'
  , loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  }
  ,
  {
    path: 'contato'
  , loadChildren: () => import('./contato/contato.module').then( m => m.ContatoModule )
  }
  ,
  {
    path: 'missao'
  , loadChildren: () => import('./missao/missao.module').then( m => m.MissaoModule )
  }
  ,
  {
    path: 'galeria'
  , loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaModule )
  }
  ,
  {
    path: 'valores'
  , loadChildren: () => import('./valores/valores.module').then( m => m.ValoresModule )
  }
  ,
  {
    path: 'quem-somos'
  , loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosModule )
  }
  ,
  {
    path: 'servicos'
  , loadChildren: () => import('./servicos/servicos.module').then( m => m.ServicosModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
