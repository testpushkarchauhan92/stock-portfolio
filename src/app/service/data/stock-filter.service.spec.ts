import { TestBed } from '@angular/core/testing';

import { StockFilterService } from './stock-filter.service';

describe('StockFilterService', () => {
  let service: StockFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
