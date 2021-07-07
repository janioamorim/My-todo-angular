import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductCreateComponent } from "./Components/Product/product-create/product-create.component";
import { ProductDeleteComponent } from "./Components/Product/product-delete/product-delete.component";
import { ProductUpdateComponent } from "./Components/Product/product-update/product-update.component";

import { HomeComponent } from "./views/home/home.component";
import { ProductComponent } from "./views/product/product.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
