import { Router } from '@angular/router';
import { FetchUsersService } from './fetch-users.service';
import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from './fetch-products.service';

@Component({
  selector: 'app-products',
  template: `
    <p>products works!</p>
    <ul>
      <li *ngFor="let p of products">
        <a (click)="showDetail(p)">{{ p.email }}</a>
      </li>
    </ul>
    <button (click)="addProducts()">New User</button>
    <!-- <a [routerLink]="['/', 'products', 'productDetail', 'prodId']">Products</a> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(
    private fetchProducts: FetchProductsService,
    private router: Router
  ) {
    this.fetchProducts.getProducts();
  }

  addProducts() {
    this.fetchProducts.saveProduct();
    this.fetchProducts.getProducts();
    this.updateState();
  }

  showDetail(p: any) {
    // console.log(p);
    this.router.navigate(['/', 'products', 'productDetail', p.email], {
      state: p,
    });
  }
  updateState() {
    this.fetchProducts.getCachedProductList().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
    this.updateState();
  }
}
