import { TestBed } from '@angular/core/testing';

import { SeriesListService } from './series-list.service';

describe('SeriesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeriesListService = TestBed.get(SeriesListService);
    expect(service).toBeTruthy();
  });
});
