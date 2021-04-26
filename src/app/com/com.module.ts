import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComRoutingModule } from './com-routing.module';
import { ConfigComponent } from './com-http/config/config.component';
import { ElementRefComponent } from './com-ref/element-ref/element-ref.component';
import { ChangedetectorrefComponent } from './com-ref/changedetectorref/changedetectorref.component';
import { EchartComponent } from './com-echart/echart/echart.component';
import {NgxEchartsModule} from 'ngx-echarts'

@NgModule({
  declarations: [
    ConfigComponent,
    ElementRefComponent,
    ChangedetectorrefComponent,
    EchartComponent
  ],
  imports: [
    CommonModule,
    ComRoutingModule,
    NgxEchartsModule
  ]
})
export class ComModule { }
