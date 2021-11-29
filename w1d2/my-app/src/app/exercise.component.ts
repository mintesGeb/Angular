import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: 'exercise.component.html',
  styles: [
    `

      .button {
        border: 1px black solid;
        border-radius: 5px;
        background-color: gray;
        padding: 10px;
        color: white;
        margin: 30px;
        width: 80px;
      }
      .isEven {
        color: red;
      }
    `,
  ],
})
export class ExerciseComponent {
  authors;
  viewMode = 'p';

  courses = [
    { id: 1, name: 'c1' },
    { id: 2, name: 'c2' },
    { id: 3, name: 'c3' },
  ];

  constructor(service: AuthorService) {
    // let service = new AuthorService()
    this.authors = service.getAuthors();
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onAdd() {
    this.courses.push({ id: 4, name: 'c4' });
  }
  onChange(course: any) {
    course.name = 'updated';
  }
}
