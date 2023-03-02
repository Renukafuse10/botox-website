import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementsucessfullComponent } from './payementsucessfull.component';

describe('PayementsucessfullComponent', () => {
  let component: PayementsucessfullComponent;
  let fixture: ComponentFixture<PayementsucessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementsucessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementsucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
