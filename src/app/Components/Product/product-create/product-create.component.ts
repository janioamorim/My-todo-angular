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
<<<<<<< HEAD
  product: Product = { name:'', price: 0, type: '' }
=======
  @Input() product: Product = { name:'', price: 0 }
>>>>>>> e59d99100b66ecda804dd3661faeaca25b726252

  constructor(
     private restApi: ProductService,
     private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Metodo que chama o service
  //cria o novo produto
  createProduct(): void {
<<<<<<< HEAD
    this.restApi.create(this.product).subscribe( ()=>{
=======
    console.log(this.product)
    this.restApi.create(this.product).subscribe( (data:{})=>{
>>>>>>> e59d99100b66ecda804dd3661faeaca25b726252
       this.restApi.showMessage('Produto Criado')
       this.router.navigate(['/products'])
    })
  }

  cancel():void {
    this.router.navigate(['products'])
  }
}
