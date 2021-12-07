import { MintesSService } from './mintes-s.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mintes-c',
  template: `
    <p>mintes-c works!</p>
    <!-- <a [routerLink]="['', 'mintes']">Mintes</a> -->
    <a [routerLink]="['', 'mintes', 'rob']">Rob</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      a {
        margin: 20px;
      }
    `,
  ],
})
export class MintesCComponent implements OnInit {
  constructor(private mintesService: MintesSService) {}

  ngOnInit(): void {
    this.mintesService.logMe();
  }
}
