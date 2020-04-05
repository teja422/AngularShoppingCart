import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

    constructor(private productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    onRatingClicked(result: string): void {
        console.log(result);
    }

    ngOnInit(): void {
        console.log("In OnInit");
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products,
                this.filteredProducts = this.products
            },
            error: err => this.errorMessage = err
        });
    }

}