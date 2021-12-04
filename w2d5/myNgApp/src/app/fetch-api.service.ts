import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(private client: HttpClient) {}

  getCatchedData() {
    return of(localStorage.getItem('users'));
  }

  fetchUsers() {
    return this.client.get('https://randomuser.me/api/?results=10');
  }
}
