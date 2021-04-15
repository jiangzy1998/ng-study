import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComRoutingModule } from './com-routing.module';
import { ConfigComponent } from './com-http/config/config.component';


@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ComRoutingModule
  ]
})
export class ComModule { }
