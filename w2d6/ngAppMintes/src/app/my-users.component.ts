import { Router } from '@angular/router';
import { ManageMyUsersService } from './manage-my-users.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-users',
  template: `
    <p>my-users works!</p>

    <br />
    <div *ngIf="showLogin; else mintes">
      <input
        name="email"
        (keyup)="onKey($event)"
        (click)="inputClick($event)"
        value="min@geb"
        placeholder="email"
      />
      <input
        (click)="inputClick($event)"
        (keyup)="onKey($event)"
        name="password"
        value="125334576"
        placeholder="password"
      />
      <button (click)="handleLogin()">Login</button>
    </div>
    <ng-template #mintes>
      <div>
        I am signed in
        <button (click)="handleLogOut()">LogOut</button>

        <ul>
          <li *ngFor="let user of users">
            <a (click)="showDetail(user)">
              {{ user.email }}
            </a>
          </li>
        </ul>
      </div>
      <!-- <a [routerLink]="['', 'v1', 'api', 'users', 'userDetail', 'email']"
        >MyUser</a
      > -->
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styles: [],
})
export class MyUsersComponent implements OnInit, DoCheck {
  users: any;
  showLogin = true;
  loginInfo!: { email: string; password: string };
  subscription1!: Subscription;
  subscription2!: Subscription;

  constructor(
    private manageUsers: ManageMyUsersService,
    private router: Router
  ) {
    this.manageUsers.getAllUsers();
    this.checkToken();
  }
  inputClick(e: any) {
    this.loginInfo = { ...this.loginInfo, [e.target.name]: e.target.value };
  }
  onKey($event: any) {
    //  console.log($event.target.name);
    this.loginInfo = {
      ...this.loginInfo,
      [$event.target.name]: $event.target.value,
    };
  }
  handleLogin() {
    console.log(this.loginInfo);
    this.manageUsers.login(this.loginInfo);
    setTimeout(() => {
      this.checkToken();
    }, 1000);
  }

  checkToken() {
    this.subscription1 = this.manageUsers
      .getCachedToken()
      .subscribe((token) => {
        if (token) {
          this.showLogin = false;
        } else {
          this.showLogin = true;
        }
      });
  }

  getAllUsers() {
    this.subscription2 = this.manageUsers
      .getAllCachedUsers()
      .subscribe((myUsers) => {
        this.users = myUsers;
        // console.log(this.users);
      });
  }

  showDetail(user: any) {
    this.router.navigate(['', 'v1', 'api', 'users', 'userDetail', user.email], {
      state: user,
    });
  }
  handleLogOut() {
    this.manageUsers.logOut();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
  ngDoCheck() {
    // console.log('users: docheck');
    this.checkToken();
  }
}
