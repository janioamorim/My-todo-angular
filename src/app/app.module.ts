import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Template/header/header.component';
import { NavComponent } from './Components/Template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';


//importação dos componentes material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ProductDeleteComponent } from './Components/Product/product-delete/product-delete.component';
import { ProductReadComponent } from './Components/Product/product-read/product-read.component';
import { ProductRead2Component } from './Components/Product/product-read2/product-read2.component';
import { ProductUpdateComponent } from './Components/Product/product-update/product-update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
