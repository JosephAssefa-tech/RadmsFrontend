import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCaseTransactionComponent } from './court-case-transaction.component';

describe('CourtCaseTransactionComponent', () => {
  let component: CourtCaseTransactionComponent;
  let fixture: ComponentFixture<CourtCaseTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtCaseTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCaseTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
