import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtChargeModalComponent } from './court-charge-modal.component';

describe('CourtChargeModalComponent', () => {
  let component: CourtChargeModalComponent;
  let fixture: ComponentFixture<CourtChargeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtChargeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtChargeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
