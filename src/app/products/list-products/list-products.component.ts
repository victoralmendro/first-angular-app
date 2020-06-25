import { Component, OnInit } from '@angular/core';
import { Product } from 'src/products/product';
import { ProductService } from 'src/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html'
})
export class ListProductsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        },
        error => console.error(error)
      )
  }

}
