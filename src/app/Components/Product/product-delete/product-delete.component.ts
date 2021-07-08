import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/produto.service";
import { Product } from "src/app/model/produto";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {

  //cria uma fotografia do momento atual
  id = this.route.snapshot.params['id'];
  //casting produto
  product: any = {};

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

  // deletar o produto por Id
  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  //cancelar e voltar para a lista de produtos
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
