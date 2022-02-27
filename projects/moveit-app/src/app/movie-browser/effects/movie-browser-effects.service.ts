import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
  movieBrowserLoadSuccess,
  MOVIE_BROWSER_INITIATE,
  MOVIE_BROWSER_SEARCH,
} from '../actions/movie-browser.actions';
import { MovieBrowserService } from '../services/movie-browser.service';
import { tMDBResponse } from '../../models/tmdb-response';

@Injectable()
export class MovieBrowserEffectsService {
  loadTrendingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MOVIE_BROWSER_INITIATE),
      mergeMap(() =>
        this.movieBrowserService.getTrendingMovies().pipe(
          map((response) => movieBrowserLoadSuccess(response as tMDBResponse)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MOVIE_BROWSER_SEARCH),
      mergeMap(() =>
        this.movieBrowserService.searchMovies().pipe(
          map((response) => movieBrowserLoadSuccess(response as tMDBResponse)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieBrowserService: MovieBrowserService
  ) {}
}
