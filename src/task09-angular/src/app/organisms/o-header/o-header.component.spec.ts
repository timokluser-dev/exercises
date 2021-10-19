import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHeaderComponent } from './o-header.component';

describe('OHeaderComponent', () => {
  let component: OHeaderComponent;
  let fixture: ComponentFixture<OHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
