import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { BlockUserComponent } from './menu/block-user/block-user.component';
import { DashBoardComponent } from './menu/dash-board/dash-board.component';
import { DeleteProductComponent } from './menu/delete-product/delete-product.component';
import { LoginComponent } from './menu/login/login.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { PizzaInfoComponent } from './menu/pizza-info/pizza-info.component';
import { RegestrationComponent } from './menu/regestration/regestration.component';
import { UserInfoComponent } from './menu/user-info/user-info.component';
// import {MenuModule} from './menu/menu.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PathGuard } from './path.guard';
import { UpdateProductComponent } from './menu/update-product/update-product.component';
// import { MenuModule } from './menu/menu.module';
// import { ModalBoxComponent } from './menu/modal-box/modal-box.component';

const routes: Routes = [

  {path:'', redirectTo:"/mainPage",pathMatch:"full"},
  {path:'mainPage',component:MainPageComponent},
  // {path:'modal',component:ModalBoxComponent},
  {path:'menu',component:MenuPageComponent},
  // {path:'login',loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)},


  
  {path:'login',component:LoginComponent ,canActivate:[LoginGuard]},              // is login 
  {path:'regestration',component:RegestrationComponent , canActivate:[LoginGuard]}, // is login

  /* make a guard here*/
  {path:'dashBoard',component:DashBoardComponent , canActivate:[PathGuard]},
  {path:'user-info',component:UserInfoComponent ,canActivate:[PathGuard]},
  {path:'pizza-info',component:PizzaInfoComponent ,canActivate:[PathGuard]},
  {path:'blockUser',component:BlockUserComponent ,canActivate:[PathGuard]},
  {path:'deleteProduct',component:DeleteProductComponent ,canActivate:[PathGuard]},
  {path:'updateProduct',component:UpdateProductComponent ,canActivate:[PathGuard]},
  /* end */


  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  // declarations:[MenuModule],
  imports: [RouterModule.forRoot(routes ,{useHash:true})], //////////////222222222222
  exports: [RouterModule]
})
export class AppRoutingModule { }
