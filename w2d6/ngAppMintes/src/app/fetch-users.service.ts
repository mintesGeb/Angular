import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchUsersService {
  constructor(private client: HttpClient) {}

  getCachedData(): any {
    return of(localStorage.getItem('users'));
  }
  getProducts() {
    this.client.get('http://localhost:3000/users').subscribe((products) => {
      console.log(products);
    });
  }

  getUsers() {
    this.client
      .get('https://randomuser.me/api/?results=10')
      .subscribe((data: any) => {
        // console.log(data.results);
        localStorage.setItem('users', JSON.stringify(data.results));
      });
  }
  ngOnInit() {}
}
