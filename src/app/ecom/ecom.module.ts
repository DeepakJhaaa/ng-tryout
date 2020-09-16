import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EcomRoutingModule } from './ecom-routing.module';
import { EcomComponent } from './ecom.component';

@NgModule({
  declarations: [EcomComponent],
  imports: [
    CommonModule,
    EcomRoutingModule
  ],
  bootstrap: [EcomComponent]
})
export class EcomModule { }
