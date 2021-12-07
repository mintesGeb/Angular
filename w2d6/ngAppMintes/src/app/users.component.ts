import { Router } from '@angular/router';
import { FetchUsersService } from './fetch-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <!-- <p>
      users works!
    </p> -->
    <ul>
      <li *ngFor="let user of users">
        <a (click)="showDetail(user)">

          {{user.name.first}}
          {{user.name.last}}
        </a>
        
      </li>
    </ul>
    
<!-- <a [routerLink]="['/','users','userDetails','email']">User</a> -->
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private fetchUsers:FetchUsersService,private router:Router) {
    this.fetchUsers.getUsers()
   }
  
   showDetail(user:any){
      // console.log(user);
      this.router.navigate(['/','users','userDetails',user.email],{state:user})
   }

   

  getUsers(){
    this.fetchUsers.getCachedData().subscribe((users:any)=>{
      this.users=JSON.parse(users)
      // console.log(this.users);
    })
  }
  ngOnInit(): void {
    
    this.getUsers()
  }

} 
