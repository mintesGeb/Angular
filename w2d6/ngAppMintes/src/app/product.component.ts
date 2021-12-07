import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>

    <div class="card">
  <div class="container">
    <h4>{{product.email}}</h4>
    <p>{{product.phone}}</p>
    <p>{{product.createdAt | date}}</p>

  </div>
</div>
  `,
  styles: [`
  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
  `
  ]
})
export class ProductComponent implements OnInit {
  product:any

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
  this.activatedRoute.paramMap.subscribe((params:any)=>{
    // console.log( params.get("id"))
    const extras:any=this.router.getCurrentNavigation()?.extras;
    // console.log(extras['state']);
    this.product=extras['state']
  })

  }

  ngOnInit(): void {

  }

}
