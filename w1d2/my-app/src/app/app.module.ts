import { AuthorService } from './author.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MintesComponent } from './mintes.component';
import { ExerciseComponent } from './exercise.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses.component';
import { HobbiesComponent } from './hobbies.component';

@NgModule({
  declarations: [AppComponent, MintesComponent, ExerciseComponent, CoursesComponent, HobbiesComponent],
  imports: [BrowserModule, NgbModule],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
