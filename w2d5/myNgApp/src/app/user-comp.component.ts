import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comp',
  template: `
    <!-- <ul style="list-style-type:none;">
      <li *ngFor="let user of users"> -->
        <div class="card">
          <div class="container">
            <h4>{{ user.name.first }} {{ user.name.first }}</h4>
            <p>{{ user.dob.date | date }}</p>
            <p>
              {{ user.location.street.number }}
              {{ user.location.street.name }}, {{ user.location.city }},
              {{ user.location.country }},
            </p>
            <p>{{ user.phone | phone }}</p>
          </div>
        </div>
      <!-- </li>
    </ul> -->
  `,
  styles: [
    `
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
        margin: 10px;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .container {
        padding: 2px 16px;
      }
    `,
  ],
})
export class UserCompComponent implements OnInit {
  @Input('users') users: any;
  @Input('user') user:any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }
}
