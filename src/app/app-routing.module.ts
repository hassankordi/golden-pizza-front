import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';

const routes: Routes = [

  {path:'', redirectTo:"/mainPage",pathMatch:"full"},

  {path:'mainPage',component:MainPageComponent},


  {path:'menu',component:MenuPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
