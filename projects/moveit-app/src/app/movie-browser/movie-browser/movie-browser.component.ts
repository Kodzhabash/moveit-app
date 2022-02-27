import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RequestStatus } from '../../enums';
import { tMDBResponse } from '../../models/tmdb-response';
import { movieBrowserInitiate } from '../actions/movie-browser.actions';
import {
  movieBrowserState,
  movieData,
  requestStatus,
} from '../reducers/movie-browser';

@Component({
  selector: 'mia-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrls: ['./movie-browser.component.scss'],
})
export class MovieBrowserComponent implements OnInit {
  constructor(private store: Store<movieBrowserState>) {}

  requestStatus: RequestStatus = RequestStatus.UNKNOWN;
  movieData: tMDBResponse = {} as tMDBResponse;

  ngOnInit(): void {
    this.store.select(requestStatus).subscribe((status) => {
      this.requestStatus = status;
    });

    this.store.select(movieData).subscribe((data) => {
      this.movieData = data;
    });

    this.store.dispatch(movieBrowserInitiate());
  }

  get isPending(): boolean {
    return this.requestStatus === RequestStatus.PENDING;
  }
}
