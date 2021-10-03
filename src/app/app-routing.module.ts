import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './menu/login/login.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
// import {MenuModule} from './menu/menu.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MenuModule } from './menu/menu.module';
// import { ModalBoxComponent } from './menu/modal-box/modal-box.component';

const routes: Routes = [

  {path:'', redirectTo:"/mainPage",pathMatch:"full"},

  {path:'mainPage',component:MainPageComponent},
  // {path:'modal',component:ModalBoxComponent},
  {path:'menu',component:MenuPageComponent},
  // {path:'login',loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  // declarations:[MenuModule],
  imports: [RouterModule.forRoot(routes)], //////////////222222222222
  exports: [RouterModule]
})
export class AppRoutingModule { }
