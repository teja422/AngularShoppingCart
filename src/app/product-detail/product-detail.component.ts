import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from '../products/product.service';
import { IProduct } from '../products/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: any;
  pageTitle: string = 'Product Name';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    console.log("Id: ", this.route.snapshot.paramMap.get('id'));
  }
  productDetail: IProduct;
  ngOnInit() {
    let productId = +this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(productId).subscribe({
      next: products => {
        this.productDetail = products.find(function (product) {
          return product.productId == productId;
        });
      },
      error: err => this.errorMessage = err
    });

  }

  goBack(): void{
      this.router.navigate(['/products']);
  }

}
