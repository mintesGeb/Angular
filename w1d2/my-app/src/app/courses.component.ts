import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styles: [],
})
export class CoursesComponent implements OnInit {
  title = 'Angular Exrecise';
  courses;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
}
