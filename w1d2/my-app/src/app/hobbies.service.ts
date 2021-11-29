import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  constructor() {}
  getHobbies() {
    return ['ho1', 'ho2', 'ho3'];
  }
}
