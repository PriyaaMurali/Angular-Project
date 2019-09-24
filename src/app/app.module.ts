import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BadPracticeModule } from './bad-practice/bad-practice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BadPracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
