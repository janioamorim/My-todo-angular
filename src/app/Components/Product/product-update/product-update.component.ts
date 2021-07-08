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

  //cria uma fotografia do momento atual
  id = this.route.snapshot.params['id'];
  //casting produto
  product: any = {};

  // Injecao dos
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //Ao criar o component passar o Id com o nome do produto para fazer a deleção
  ngOnInit(): void {
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
    });
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
