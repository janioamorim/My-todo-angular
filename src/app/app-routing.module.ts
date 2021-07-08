
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './Components/Product/product-create/product-create.component';
import { ProductDeleteComponent } from "./Components/Product/product-delete/product-delete.component";
import { ProductUpdateComponent } from "./Components/Product/product-update/product-update.component";


const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo:'ProductCreate'
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
