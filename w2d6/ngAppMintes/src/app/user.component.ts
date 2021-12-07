import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!-- <p>user works!</p> -->
    <div class="card">
      <div class="container">
        <h4>
          {{ user.name.first }} 
          {{ user.name.last }}
        </h4>
        <p>{{ user.dob.date | date }}</p>
        <p>
          {{ user.location.street.number }}
          {{ user.location.street.name }}, {{ user.location.city }},
          {{ user.location.country }},
        </p>
        <p>{{ user.phone | phone }}</p>
      </div>
    </div>
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
export class UserComponent implements OnInit {
  user: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      // console.log(params.get('email'));
      const extras: any = this.router.getCurrentNavigation()?.extras;
      this.user = extras['state'];
      // console.log(extras['state']);
    });

  }

  ngOnInit(): void {}
}
