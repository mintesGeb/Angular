import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  template: `
    <button>
      {{ buttonName }}
    </button>
  `,
  styles: [],
})
export class ReusableButtonComponent implements OnInit {
  @Input() buttonName:string='';
  constructor() {}

  ngOnInit(): void {}
}
