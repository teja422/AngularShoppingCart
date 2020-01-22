import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../products/product.service';
import { IProduct } from '../products/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    console.log("Id: ", this.route.snapshot.paramMap.get('id'));
  }
  productDetail: IProduct;
  ngOnInit() {
    let productId = +this.route.snapshot.paramMap.get('id');

    // this.productService.getProductById(productId).subscribe({
    //   next: product => {
    //     console.log(product)
    //     this.productDetail = product
    //   },
    //   error: err => this.errorMessage = err
    // })
  }

}
