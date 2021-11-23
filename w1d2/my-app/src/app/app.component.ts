import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome</h1>
    <h4>
      <i>Love, {{ name }}</i>
    </h4>
    <p>Hi guys</p>
    <app-mintes> </app-mintes>
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
