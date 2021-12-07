import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MintesCComponent } from './mintes-c.component';
import { RobCComponent } from './rob-c.component';



@NgModule({
  declarations: [
    MintesCComponent,
    RobCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:MintesCComponent},
      {path:"rob",component:RobCComponent},

    ])
  ],
  exports:[
    // MintesCComponent
  ]
})
export class MintesModModule { }
