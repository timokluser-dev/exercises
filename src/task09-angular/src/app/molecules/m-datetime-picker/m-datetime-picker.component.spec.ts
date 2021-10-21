import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDatetimePickerComponent } from './m-datetime-picker.component';

describe('MDatetimePickerComponent', () => {
  let component: MDatetimePickerComponent;
  let fixture: ComponentFixture<MDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDatetimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
