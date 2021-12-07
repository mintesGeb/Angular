import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-user',
  template: `
    <p>my-user works!</p>

    <div class="card">
      <div class="container">
        Name:
        <h2 class="d">
          {{ myUser.firstname }}
          {{ myUser.lastname }}
        </h2>
        Email:
        <h4 class="d">{{ myUser.email }}</h4>
        Phone:
        <p class="d">{{ myUser.phone | phone }}</p>
        DateJoined:
        <p class="d">{{ myUser.createdAt | date }}</p>
      </div>
    </div>
  `,
  styles: [
    `
    .d{
      position: relative;
      left:20px;
    }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 40%;
        margin: 10px;
        padding:25px;
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
export class MyUserComponent implements OnInit , DoCheck{
  myUser: any;
  subscription!: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.paramMap.subscribe(
      (params: any) => {
        // console.log(params.get("email"));
        const extras: any = this.router.getCurrentNavigation()?.extras;
        this.myUser = extras['state'];
        // console.log();
      }
    );
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngDoCheck(){
    // console.log("user: docheck");
  }

}
