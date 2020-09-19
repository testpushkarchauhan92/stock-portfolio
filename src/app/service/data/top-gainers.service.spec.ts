import { TestBed } from '@angular/core/testing';

import { TopGainersService } from './top-gainers.service';

describe('TopGainersService', () => {
  let service: TopGainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopGainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
