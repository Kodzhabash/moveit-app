import { Component, Input } from '@angular/core';
import { environment } from 'projects/moveit-app/src/environments/environment';
import { tMDBMovie } from '../../models/tmdb-movie';

@Component({
  selector: 'mia-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: tMDBMovie = {} as tMDBMovie;
  baseUrl: string = environment.baseImgUrl;
}
