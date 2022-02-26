import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { MoveitComponentsModule } from 'moveit-components';



@NgModule({
  declarations: [
    MovieBrowserComponent
  ],
  imports: [
    CommonModule,
    MoveitComponentsModule
  ]
})
export class MovieBrowserModule { }
