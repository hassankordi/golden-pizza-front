import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { RegestrationComponent } from './regestration/regestration.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PizzaInfoComponent } from './pizza-info/pizza-info.component'; ///////



@NgModule({
  declarations: [
    MenuPageComponent,
    LoginComponent,
    RegestrationComponent,
    DashBoardComponent,
    UserInfoComponent,
    PizzaInfoComponent,


    // FormsModule
   
   
  ],
  imports: [
     CommonModule,
     MenuRoutingModule ,
    ReactiveFormsModule ,
  ]
})
export class MenuModule { }
