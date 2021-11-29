import { Component } from '@angular/core';
import {NgbConfig} from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome</h1>
    <h4>
      <i>Love, {{ name }}</i>
    </h4>
    <p>Hi guys</p>
    <app-mintes> </app-mintes>
    <app-exercise></app-exercise>
    <app-courses></app-courses>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Mintes';
}
