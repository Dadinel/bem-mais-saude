import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { GaleriaRoutingModule } from './galeria-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    GaleriaComponent,
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    PoModule
  ],
  bootstrap: [GaleriaComponent]
})
export class GaleriaModule { }
