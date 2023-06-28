import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtChargeComponent } from './court-charge.component';

describe('CourtChargeComponent', () => {
  let component: CourtChargeComponent;
  let fixture: ComponentFixture<CourtChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtChargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
