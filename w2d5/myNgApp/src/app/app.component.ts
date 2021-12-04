import { FetchApiService } from './fetch-api.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>Header</header>
    <nav>
      <a [routerLink]="['/']">Home</a>

      <a [routerLink]="['/', 'users']">Users</a>
    </nav>
    <router-outlet></router-outlet>
    <header>Footer</header>
  `,
  styles: [
    `
      header,
      footer {
        background-color: grey;
      }
      .mainDiv {
        height: 100px;
      }
    `,
  ],
})
export class AppComponent {}
