import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';   // for routes
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuModule } from './menu/menu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { MenuRoutingModule } from './menu/menu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,        // for routes
    // MenuModule,
    // MenuRoutingModule          222222222222222222
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
