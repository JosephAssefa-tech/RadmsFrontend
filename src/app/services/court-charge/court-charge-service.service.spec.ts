import { TestBed } from '@angular/core/testing';

import { CourtChargeServiceService } from './court-charge-service.service';

describe('CourtChargeServiceService', () => {
  let service: CourtChargeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtChargeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
