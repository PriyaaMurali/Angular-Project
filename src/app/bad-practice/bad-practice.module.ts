import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBadCompComponent } from './my-bad-comp/my-bad-comp.component';



@NgModule({
  declarations: [MyBadCompComponent],
  imports: [
    CommonModule
  ],
  exports:[MyBadCompComponent]
})
export class BadPracticeModule { }
