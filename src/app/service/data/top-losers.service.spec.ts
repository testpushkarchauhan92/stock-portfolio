import { TestBed } from '@angular/core/testing';

import { TopLosersService } from './top-losers.service';

describe('TopLosersService', () => {
  let service: TopLosersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopLosersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
