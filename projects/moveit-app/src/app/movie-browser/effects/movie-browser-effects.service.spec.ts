import { TestBed } from '@angular/core/testing';

import { MovieBrowserEffectsService } from './movie-browser-effects.service';

describe('MovieBrowserEffectsService', () => {
  let service: MovieBrowserEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBrowserEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
