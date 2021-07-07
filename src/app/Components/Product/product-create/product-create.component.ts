import { Component, OnInit } from '@angular/core';
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
  produto: Product = { name:'', price: 0 }

  constructor(
     private restApi: ProductService,
     private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Metodo que chama o service
  //cria o novo produto
  createProduct(): void {
    this.restApi.create(this.produto).subscribe( ()=>{
       //this.restApi.showMessage('Produto Criado')
       this.router.navigate(['/products'])
    })
  }

  cancelar():void {
    this.router.navigate(['products'])
  }
}
