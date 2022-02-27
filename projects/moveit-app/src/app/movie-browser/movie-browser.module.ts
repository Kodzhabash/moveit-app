import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieBrowserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MovieBrowserModule { }
