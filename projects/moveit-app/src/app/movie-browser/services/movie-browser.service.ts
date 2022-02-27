import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/moveit-app/src/environments/environment';

@Injectable()
export class MovieBrowserService {
  constructor(private http: HttpClient) {}

  searchMovies(query?: string) {
    const method = 'GET';
    const url = `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query=${query}`;

    return this.http.request(method, url);
  }

  getTrendingMovies() {
    const method = 'GET';
    const url = `${environment.baseUrl}/trending/movie/week?api_key=${environment.apiKey}`;

    return this.http.request(method, url);
  }
}
