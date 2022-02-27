import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MovieBrowserEffectsService } from './effects/movie-browser-effects.service';



@NgModule({
  declarations: [
    MovieBrowserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([MovieBrowserEffectsService])
  ]
})
export class MovieBrowserModule { }
