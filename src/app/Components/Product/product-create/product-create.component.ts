import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/produto';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //Fazendo Casting do nosso produto
  product: Product = { name:'', price: 0, type: '' }

  constructor(
     private restApi: ProductService,
     private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Metodo que chama o service
  //cria o novo produto
  createProduct(): void {
    this.restApi.create(this.product).subscribe( ()=>{
       this.restApi.showMessage('Produto Criado')
       this.router.navigate(['/products'])
    })
  }

  cancel():void {
    this.router.navigate(['products'])
  }
}
