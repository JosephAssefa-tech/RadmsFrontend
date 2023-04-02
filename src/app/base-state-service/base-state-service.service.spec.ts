import { TestBed } from '@angular/core/testing';

import { BaseStateServiceService } from './base-state-service.service';

describe('BaseStateServiceService', () => {
  let service: BaseStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
