import { TestBed } from '@angular/core/testing';

import { CourtCaseServiceService } from './court-case-service.service';

describe('CourtCaseServiceService', () => {
  let service: CourtCaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtCaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
