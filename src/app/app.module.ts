import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComModule } from './com/com.module';
import { FatherComponent } from './practice/Watching-Input-Change/father/father.component';
import { ChildComponent } from './practice/Watching-Input-Change/child/child.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
