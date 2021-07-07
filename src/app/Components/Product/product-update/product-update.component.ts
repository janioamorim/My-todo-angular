import { Product } from "src/app/model/produto";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/produto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
=======
    //const id = +this.route.snapshot.paramMap.get("id");
    //this.productService.readById(id).subscribe((product) => {
    //  this.product = product;
    //});
>>>>>>> 02c7eabcf945c5ebaba7646cae59f32d9a78319d
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
