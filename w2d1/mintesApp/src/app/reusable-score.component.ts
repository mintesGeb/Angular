import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-score',
  template: ` <p>Score: Won {{ wins }} / Lost {{ losses }}</p> `,
  styles: [],
})
export class ReusableScoreComponent implements OnInit {
  @Input() wins: number = 0;
  @Input() losses: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
