import { TestBed } from '@angular/core/testing';

import { ContinentNavigationService } from './continent-navigation.service';

describe('ContinentNavigationService', () => {
  let service: ContinentNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinentNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
