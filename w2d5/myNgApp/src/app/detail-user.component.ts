import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-user',
  template: `
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
export class DetailUserComponent implements OnInit {
  @Input("state") state:any
  user: any;
  subscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.subscription = this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        console.log(params.get('email'));
        let extras: any = this.router.getCurrentNavigation()?.extras;
        this.user = extras['state'].myUser;
        console.log(this.user);
        // console.log(this.state); 
      }
    );
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
