import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importação dos componentes
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductDeleteComponent } from './Components/Product/product-delete/product-delete.component';
import { ProductReadComponent } from './Components/Product/product-read/product-read.component';
import { ProductUpdateComponent } from './Components/Product/product-update/product-update.component';
import { ProductCreateComponent } from './Components/Product/product-create/product-create.component';
import { HeaderComponent } from './Components/Template/header/header.component';
import { NavComponent } from './Components/Template/nav/nav.component';

//importação dos componentes material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    ProductDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
