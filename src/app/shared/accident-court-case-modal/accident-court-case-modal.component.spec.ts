import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCourtCaseModalComponent } from './accident-court-case-modal.component';

describe('AccidentCourtCaseModalComponent', () => {
  let component: AccidentCourtCaseModalComponent;
  let fixture: ComponentFixture<AccidentCourtCaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccidentCourtCaseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCourtCaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
