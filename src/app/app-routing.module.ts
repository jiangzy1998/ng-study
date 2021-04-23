import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // 重定向到 /component 路由
    path:"",
    redirectTo:"component",
    pathMatch:"full"
  },
  {
    // 指向组件总路由，懒加载
    path:"component",
    loadChildren: ()=>import('./com/com-routing.module').then(m=>m.ComRoutingModule)
  }, 
  {
    path:"practice",
    loadChildren:()=>import('./practice/practice.module').then(m=>m.PracticeModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
