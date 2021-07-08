import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/produto';
import { ProductService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'type','action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  


}
