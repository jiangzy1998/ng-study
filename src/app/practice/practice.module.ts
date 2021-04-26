import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { Top10Component } from './js-audit/top10/top10.component';
import { CustomAlertComponent } from './js-audit/custom-alert/custom-alert.component';


@NgModule({
  declarations: [
    Top10Component,
    CustomAlertComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
