import { HobbiesService } from './hobbies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  template: `
    <p *ngFor="let hobby of hobbies">
      {{ hobby }}
    </p>
  `,
  styles: [],
})
export class HobbiesComponent implements OnInit {
  hobbies:string[];

  constructor(service: HobbiesService) {
    this.hobbies = service.getHobbies();
  }

  ngOnInit(): void {}
}
