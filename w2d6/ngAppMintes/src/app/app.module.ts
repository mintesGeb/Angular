import { SpyInterceptor } from './spy.interceptor';
import { MintesModModule } from './mintes-mod/mintes-mod.module';
import { CheckEmailGuard } from './check-email.guard';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { PhonePipe } from './phone.pipe';
import { MyUsersComponent } from './my-users.component';
import { MyUserComponent } from './my-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ProductsComponent,
    ProductComponent,
    PhonePipe,
    MyUsersComponent,
    MyUserComponent,
  ],
  imports: [
    // MintesModModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",redirectTo:""},
      {path:"users",component:UsersComponent,children:[
        {path:"userDetails/:email", component:UserComponent, canActivate:[CheckEmailGuard]}
      ]},
      {path:"products",component:ProductsComponent, children:[
        {path:"productDetail/:id",component:ProductComponent}
      ]},
      {path:'v1/api/users', component:MyUsersComponent, children:[
        {path:"userDetail/:email", component:MyUserComponent}
      ]},
      {path:"mintes", loadChildren:()=>import('./mintes-mod/mintes-mod.module').then((m=>m.MintesModModule)) },
      {path:"home",redirectTo:""},
    ]),
    NgbModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass: SpyInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
