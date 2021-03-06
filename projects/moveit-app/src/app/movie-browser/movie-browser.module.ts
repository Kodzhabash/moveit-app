import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SharedModule } from '../shared/shared.module';
import { MovieBrowserEffectsService } from './effects/movie-browser-effects.service';
import * as movieBrowserStore from './reducers/movie-browser';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieBrowserComponent, MovieCardComponent, MovieListComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    SharedModule,
    EffectsModule.forFeature([MovieBrowserEffectsService]),
    StoreModule.forFeature(
      movieBrowserStore.featureKey,
      movieBrowserStore.movieBrowserReducer
    ),
  ],
})
export class MovieBrowserModule {}
