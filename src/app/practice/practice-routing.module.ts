import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
