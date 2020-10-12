import { TestBed } from '@angular/core/testing';

import { ReleasesService } from './releases.service';

describe('ReleasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReleasesService = TestBed.get(ReleasesService);
    expect(service).toBeTruthy();
  });
});
