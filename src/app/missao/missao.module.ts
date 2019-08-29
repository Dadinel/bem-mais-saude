import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissaoComponent } from './missao.component';
import { MissaoRoutingModule } from './missao-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    MissaoComponent,
  ],
  imports: [
    CommonModule,
    MissaoRoutingModule,
    PoModule
  ],
  bootstrap: [MissaoComponent]
})
export class MissaoModule { }
