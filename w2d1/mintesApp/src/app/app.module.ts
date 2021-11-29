import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MintesCompComponent } from './mintes-comp.component';
import { ReusableButtonComponent } from './reusable-button.component';
import { ReusableScoreComponent } from './reusable-score.component';

@NgModule({
  declarations: [
    AppComponent,
    MintesCompComponent,
    ReusableButtonComponent,
    ReusableScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
