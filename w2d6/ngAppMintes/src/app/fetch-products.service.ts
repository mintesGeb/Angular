import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor(private client: HttpClient) {}

  getCachedProductList() {
    const prod: any = localStorage.getItem('products');
    return of(JSON.parse(prod));
  }
  saveProduct() {
    let headers:any={
      "Content-Type":"application/json",
      responseType: 'json',
    }
    this.client
      .post<any>(
        'http://localhost:3000/users/signup',
        { email: 'yonas@benti', password: 'hi321all' },
        headers
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  getProducts() {
    this.client
      .get('http://localhost:3000/users', {
        responseType: 'json',
      })
      .subscribe((products: any) => {
        localStorage.setItem('products', JSON.stringify(products.data));
        // console.log(products.data);
      });
  }
}
