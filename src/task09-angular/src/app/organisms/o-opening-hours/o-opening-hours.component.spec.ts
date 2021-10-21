import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOpeningHoursComponent } from './o-opening-hours.component';

describe('OOpeningHoursComponent', () => {
  let component: OOpeningHoursComponent;
  let fixture: ComponentFixture<OOpeningHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOpeningHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OOpeningHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
