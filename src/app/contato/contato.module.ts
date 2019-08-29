import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    ContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    PoModule
  ],
  bootstrap: [ContatoComponent]
})
export class ContatoModule { }
