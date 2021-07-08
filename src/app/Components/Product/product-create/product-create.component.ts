import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/produto';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //Fazendo Casting do nosso produto
  product: Product = { name:'', price: 0, type: '' }

  constructor(private productService: ProductService,
      private router: Router, private formBuild:FormBuilder) { }

      formData: FormGroup = this.formBuild.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        type: ['', Validators.required]
      })
      
     
      ngOnInit(){     
      }

      validacaoNumber(formcontrol:any) {
        if (isNaN(formcontrol.value)) {
         return {"price" : true};
        }
         return null;
      }

  //Metodo que chama o service
  //cria o novo produto
  createProduct(): void {    
    if (this.formData.valid) {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Produto criado!')
        this.router.navigate(['/products'])
      })
    
    }else{
      return
    }

  }

  cancel():void {
    this.router.navigate(['products'])
  }

  
}
