import { Action } from '@ngrx/store';

export const MOVIE_BROWSER_INITIATE = '[MOVIE_BROWSER] INITIATE';
export const MOVIE_BROWSER_SEARCH = '[MOVIE_BROWSER] SEARCH';
export const MOVIE_BROWSER_LOAD_SUCCESS = '[MOVIE_BROWSER] LOAD_SUCCESS';

export class MovieBrowserInitiate implements Action {
  readonly type = MOVIE_BROWSER_INITIATE;
}

export class MovieBrowserSearch implements Action {
  readonly type = MOVIE_BROWSER_SEARCH;

  constructor(public payload: string) {}
}

export class MovieBrowserLoadSuccess implements Action {
  readonly type = MOVIE_BROWSER_LOAD_SUCCESS;

  constructor(public payload: any) {}
}

export type Actions =
  MovieBrowserInitiate
  | MovieBrowserSearch
  | MovieBrowserLoadSuccess;
