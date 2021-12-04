import { FetchApiService } from './fetch-api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-comp',
  template: `
    <p>Users</p>
    <ul>
      <li *ngFor="let user of data">
        <!-- <button (click)="seeDetails(user)">Detail</button> -->
        <a 
        (click)="showProfile(user)"
        >
        {{ user.name.first }} {{ user.name.first }}
      </a>
      <br />
        <!-- <button (click)="showProfile(user)">Profile</button> -->
      </li>
    </ul>
    <div *ngIf="showDetail">
      <app-user-comp [users]="data" [user]="singleData"></app-user-comp>
    </div>
    <!-- <app-detail-user []></app-detail-user> -->
    <!-- <a [routerLink]="['/', 'users', 'userProfile', 'email']">UserProfile</a> -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class UsersCompComponent implements OnInit {
  showDetail: boolean = false;

  email: any;
  singleData: any;
  data: any;
  constructor(
    private fetch: FetchApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
getSingleData(){
  return this.singleData
}
  seeDetails(user: any) {
    // this.router.navigate(['/', 'users', `${user.email}`], { state: this.data });
    console.log(user.email);

    this.singleData = user;
    this.showDetail = true;
  }
  showProfile(user: any) {
    this.singleData = user;
    this.router.navigate(['/', "users",'userProfile',user.email], {
      state: { myUser: this.singleData },
    });
  }
  ngOnInit(): void {
    this.fetch.getCatchedData().subscribe((usersData: any) => {
      // console.log(JSON.parse(usersData).results);
      this.data = JSON.parse(usersData).results;
      // console.log(this.data);
    });
  }
}
