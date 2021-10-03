import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { LoginComponent } from './login/login.component';

import { MenuRoutingModule } from './menu-routing.module'; ///////


@NgModule({
  declarations: [
    MenuPageComponent,
    LoginComponent,
   
   
  ],
  imports: [
     CommonModule,
     MenuRoutingModule
  ]
})
export class MenuModule { }
