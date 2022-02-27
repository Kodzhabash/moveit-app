import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLibraryComponent } from './movie-library/movie-library.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieLibraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MovieLibraryModule { }
