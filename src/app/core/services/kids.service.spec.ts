import { TestBed } from '@angular/core/testing';

import { KidsService } from './kids.service';

describe('KidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KidsService = TestBed.inject(KidsService);
    expect(service).toBeTruthy();
  });
});
