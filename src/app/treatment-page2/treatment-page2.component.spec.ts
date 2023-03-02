import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPage2Component } from './treatment-page2.component';

describe('TreatmentPage2Component', () => {
  let component: TreatmentPage2Component;
  let fixture: ComponentFixture<TreatmentPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
