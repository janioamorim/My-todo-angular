import { Product } from "src/app/model/produto";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/produto.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private route: ActivatedRoute,
    private formBuild:FormBuilder
  ) {}

  formData: FormGroup = this.formBuild.group({
    name: ['', Validators.required],
    price: ['', [Validators.required, this.validateNumber]],
    type: ['', Validators.required]
  })

  //Ao criar o component passar o Id com o nome do produto para fazer a deleção
  ngOnInit(): void {
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    if (this.formData.valid) {
      this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      });
    }else{
      return
    }
  }

  validateNumber(formcontrol:any) {
    if (isNaN(formcontrol.value)) {
     return {"price" : true};
    }
     return null;
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
