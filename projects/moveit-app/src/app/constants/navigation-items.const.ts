import { NavigationItem } from '../models';

const movieLibrary = {
  label: 'Movie Library',
  route: '/movie-library',
};

const movieBrowser = {
  label: 'Movie Browser',
  route: '/movie-browser',
};

export const NAVIGATION_ITEMS: NavigationItem[] = [movieLibrary, movieBrowser];
