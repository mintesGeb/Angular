import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    
    <nav>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/', 'mintes']">Mintes</a>
      <a [routerLink]="['/', 'users']">Users-Test</a>
      <a [routerLink]="['/', 'products']">Products</a>
      <a [routerLink]="['/', 'v1','api','users']">Users</a>
    </nav>
    <router-outlet></router-outlet>
    <footer></footer>
  `,
  styles: [
    `
      header,
      footer {
        background-color: grey;
        height: 40px;
        margin-right: 0;
        margin-left: 0;
      }
      header{
        margin-bottom:10px;
      }
      footer {
        margin-top: 800px;
      }
      a {
        margin: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ngAppMintes';
}
