import { TestBed } from '@angular/core/testing';

import { MoveitComponentsService } from './moveit-components.service';

describe('MoveitComponentsService', () => {
  let service: MoveitComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveitComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
