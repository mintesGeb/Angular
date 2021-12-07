import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { ManageMyUsersService } from './manage-my-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <button (click)="signUpForm = !signUpForm">SignUp</button><br />
    <button (click)="signInForm = !signInForm">SignIn</button>
    <hr />
    <div class="signUpForm" *ngIf="signUpForm">
      <h4>Signup</h4>
      <input
        name="firstname"
        placeholder="firstname"
        (keyup)="handleInputs($event)"
      /><br />
      <input
        name="lastname"
        placeholder="lastname"
        (keyup)="handleInputs($event)"
      /><br />
      <input
        name="email"
        placeholder="email"
        (keyup)="handleInputs($event)"
      /><br />
      <input
        name="password"
        placeholder="password"
        (keyup)="handleInputs($event)"
      /><br />
      <input
        name="phone"
        placeholder="phone"
        (keyup)="handleInputs($event)"
      /><br />
      <button (click)="signUpDone()">Done</button>

      <!-- <div class="btn-group btn-group-toggle">
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton [(ngModel)]="model.left"> Left (pre-checked)
  </label>
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton [(ngModel)]="model.middle"> Middle
  </label>
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton [(ngModel)]="model.right"> Right
  </label>
</div> -->
      <hr />
      <!-- <pre>{{model | json}}</pre> -->
    </div>
    <div *ngIf="signInForm">I am signIn form</div>
  `,
  styles: [
    `
      .signUpForm {
        text-align: center;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  newUser!: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
  };

  model = {
    left: true,
    middle: true,
    right: true,
  };
  signInForm = false;
  signUpForm = true;

  constructor(
    private manageUsers: ManageMyUsersService,
    private ngbConfig: NgbConfig
  ) {}

  handleInputs(e: any) {
    this.newUser = { ...this.newUser, [e.target.name]: e.target.value };
  }

  signUpDone() {
    if (
      this.newUser.firstname ||
      this.newUser.lastname ||
      this.newUser.email ||
      this.newUser.password ||
      this.newUser.phone
    ) {
      console.log(this.newUser);
      this.manageUsers.saveUser(this.newUser)
    } else {
      console.log('info missing');
    }
  }

  ngOnInit(): void {}
}
