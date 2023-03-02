import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentPlanComponent } from './add-payment-plan.component';

describe('AddPaymentPlanComponent', () => {
  let component: AddPaymentPlanComponent;
  let fixture: ComponentFixture<AddPaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
