import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    ServicosComponent,
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    PoModule
  ],
  bootstrap: [ServicosComponent]
})
export class ServicosModule { }
