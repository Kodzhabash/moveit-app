import { Component, Input } from '@angular/core';
import { tMDBMovie } from '../../models/tmdb-movie';

@Component({
  selector: 'mia-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: tMDBMovie[] = [];
}
