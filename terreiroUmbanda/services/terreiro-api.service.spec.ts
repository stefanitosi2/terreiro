import { TestBed } from '@angular/core/testing';

import { TerreiroApiService } from './terreiro-api.service';

describe('TerreiroApiService', () => {
  let service: TerreiroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerreiroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
