import { TestBed } from '@angular/core/testing';

import { NextsearchService } from './nextsearch.service';

describe('NextsearchService', () => {
  let service: NextsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
