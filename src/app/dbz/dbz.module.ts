import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/main-pages.component';



@NgModule({
  declarations: [
    DbzMainComponent
  ],
  exports:[
    DbzMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
