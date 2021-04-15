import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComObservableComponent } from "./com-observable/com-observable.component"

const routes: Routes = [
  // 重定向出现 url 只有 /observable，未解决
  // {
  //   path:"",
  //   redirectTo:"/observable",
  //   pathMatch:"full"
  // },
  {
    path:"observable",
    component:ComObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComRoutingModule { }
