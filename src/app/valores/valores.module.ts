import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValoresComponent } from './valores.component';
import { ValoresRoutingModule } from './valores-routing.module';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    ValoresComponent,
  ],
  imports: [
    CommonModule,
    ValoresRoutingModule,
    PoModule
  ],
  bootstrap: [ValoresComponent]
})
export class ValoresModule { }
