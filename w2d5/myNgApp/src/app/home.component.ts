import { FetchApiService } from './fetch-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- <p>
      home works!
    </p> -->
    
    <router-outlet></router-outlet>

    <!-- <button (click)="showUsers = !showUsers">Show/Hide Users</button> -->
    <div *ngIf="showUsers">
      <app-users-comp></app-users-comp>
    </div> 
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  showUsers = false;
  name = 'Mintes';

  constructor(private fetch: FetchApiService) {}
  ngOnInit() {
    this.fetch.fetchUsers().subscribe((data) => {
      localStorage.setItem('users', JSON.stringify(data));
      // console.log(data);
    });
  }
}
