import { createAction, props } from '@ngrx/store';
import { tMDBResponse } from '../../models/tmdb-response';

export const MOVIE_BROWSER_INITIATE = '[MOVIE_BROWSER] INITIATE';
export const MOVIE_BROWSER_SEARCH = '[MOVIE_BROWSER] SEARCH';
export const MOVIE_BROWSER_LOAD_SUCCESS = '[MOVIE_BROWSER] LOAD_SUCCESS';

export const movieBrowserInitiate = createAction(MOVIE_BROWSER_INITIATE);

export const movieBrowserSearch = createAction(
  MOVIE_BROWSER_SEARCH,
  props<{ query: string }>()
);

export const movieBrowserLoadSuccess = createAction(
  MOVIE_BROWSER_LOAD_SUCCESS,
  props<tMDBResponse>()
);
