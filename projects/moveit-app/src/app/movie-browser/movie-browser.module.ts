import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SharedModule } from '../shared/shared.module';
import { MovieBrowserEffectsService } from './effects/movie-browser-effects.service';
import * as movieBrowserStore from './reducers/movie-browser';

@NgModule({
  declarations: [MovieBrowserComponent],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([MovieBrowserEffectsService]),
    StoreModule.forFeature(
      movieBrowserStore.featureKey,
      movieBrowserStore.movieBrowserReducer
    ),
  ],
})
export class MovieBrowserModule {}
