import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { RequestStatus } from '../../enums';
import { tMDBResponse } from '../../models/tmdb-response';
import {
  movieBrowserInitiate,
  movieBrowserLoadSuccess,
  movieBrowserSearch,
} from '../actions/movie-browser.actions';

export const featureKey = 'movieBrowser';

export interface movieBrowserState {
  requestStatus: RequestStatus;
  movieData: tMDBResponse;
}

export const initialState: movieBrowserState = {
  requestStatus: RequestStatus.UNKNOWN,
  movieData: {} as tMDBResponse,
};

export const movieBrowserReducer = createReducer(
  initialState,
  on(movieBrowserInitiate, (state) => ({
    ...state,
    requestStatus: RequestStatus.PENDING,
  })),
  on(movieBrowserSearch, (state) => ({
    ...state,
    requestStatus: RequestStatus.PENDING,
  })),
  on(movieBrowserLoadSuccess, (state, data) => ({
    ...state,
    movieData: data,
    requestStatus: RequestStatus.SUCCESS,
  }))
);

export const getMovieBrowserState =
  createFeatureSelector<movieBrowserState>(featureKey);

export const requestStatus = createSelector(
  getMovieBrowserState,
  (state: movieBrowserState) => state.requestStatus
);

export const movieData = createSelector(
  getMovieBrowserState,
  (state: movieBrowserState) => state.movieData
);
