import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieBrowserInitiate } from '../actions/movie-browser.actions';
import { MovieBrowserState } from '../store/movie-browser.store';


@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrls: ['./movie-browser.component.scss']
})
export class MovieBrowserComponent implements OnInit {

  constructor(private store: Store<MovieBrowserState>) {}

  ngOnInit(): void {
    this.store.dispatch(new MovieBrowserInitiate());
  }

}
