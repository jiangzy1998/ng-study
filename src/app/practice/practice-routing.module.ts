import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top10Component } from './js-audit/top10/top10.component';
import { FatherComponent } from './Watching-Input-Change/father/father.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"WatchInputChange",
    pathMatch:"full"
  },
  {
    path:"WatchInputChange",
    component:FatherComponent
  },
  {
    path:"jsaudit",
    children:[
      {
        path:"top10",
        component:Top10Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
