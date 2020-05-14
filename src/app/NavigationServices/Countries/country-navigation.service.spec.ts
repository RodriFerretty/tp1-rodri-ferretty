import { TestBed } from '@angular/core/testing';

import { CountryNavigationService } from './country-navigation.service';

describe('CountryNavigationService', () => {
  let service: CountryNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
