import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';   // for routes
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuModule } from './menu/menu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { MenuRoutingModule } from './menu/menu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
// json web token
// import * as jwt from '../../node_modules/jsonwebtoken'

import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
  
} from 'angularx-social-login';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
    UpdateProductComponent,
   
  ],

  // el mafrod eny 3andy another module yb2a lazem a3melo import hena 34an y4ta8al
  // ana m4 3aref da 48al ezay
  // المفروف اني طالما عندي اكتر من موديول يبقي لازم اعمل لل موديولز دي امبورت في ال ارراي دا 
 // انا مش عارف الابلكيشن دا شغال ازاي و ايه الي بيربط الموديولين دول ببعض
  imports: [
    BrowserModule,
    AppRoutingModule,        // for routes
    // MenuModule,
    // MenuRoutingModule          222222222222222222
    HttpClientModule ,
    ReactiveFormsModule ,
    SocialLoginModule ,
   
    FormsModule
  ],
  // providers: [],

  
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '566957944883-4ovoi05bh8g3ktjqju57r7s2fgte1e36.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
