import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mintes',
  template: `
    <p>mintes works!</p>
    <p>mama works!</p>
  `,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class MintesComponent {}
