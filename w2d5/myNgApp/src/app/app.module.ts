import { CheckEmailGuard } from './check-email.guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersCompComponent } from './users-comp.component';
import { UserCompComponent } from './user-comp.component';

import { PhonePipe } from './phone.pipe';
import { TitleDirective } from './title.directive';
import { HomeComponent } from './home.component';
import { DetailUserComponent } from './detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersCompComponent,
    UserCompComponent,

    PhonePipe,
    TitleDirective,
    HomeComponent,
    DetailUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '' },
      {
        path: 'users',
        component: UsersCompComponent,
        children: [
          { 
            path: 'userProfile/:email',
             component: DetailUserComponent,
             canActivate:[CheckEmailGuard]
            }],
      },
      { path: '**', redirectTo: '' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {} 
