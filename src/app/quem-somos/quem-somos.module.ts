import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSomosComponent } from './quem-somos.component';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    QuemSomosComponent,
  ],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    PoModule
  ],
  bootstrap: [QuemSomosComponent]
})
export class QuemSomosModule { }
