import { TestBed } from '@angular/core/testing';

import { COVIDRepositoryService } from './covidrepository-service.service';

describe('COVIDRepositoryServiceService', () => {
  let service: COVIDRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(COVIDRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
