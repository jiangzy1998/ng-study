import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComRoutingModule } from './com-routing.module';
import { ConfigComponent } from './com-http/config/config.component';
import { PeekABooComponent } from './com-Lifecycle-Hooks/peek-a-boo/peek-a-boo.component';


@NgModule({
  declarations: [
    ConfigComponent,
    PeekABooComponent
  ],
  imports: [
    CommonModule,
    ComRoutingModule
  ]
})
export class ComModule { }
