import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { MovieBrowserComponent } from './movie-browser/movie-browser/movie-browser.component';
import { MovieLibraryComponent } from './movie-library/movie-library/movie-library.component';

const movieBrowser: Route = {
  path: 'movie-browser',
  component: MovieBrowserComponent
};

const movieLibrary: Route = {
  path: 'movie-library',
  component: MovieLibraryComponent
};

const defaultRedirect: Route = {
  path: '',
  redirectTo: '/movie-browser',
  pathMatch: 'full'
}

const routes: Routes = [movieBrowser, movieLibrary, defaultRedirect];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
