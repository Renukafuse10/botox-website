import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertficateComponent } from './certficate.component';

describe('CertficateComponent', () => {
  let component: CertficateComponent;
  let fixture: ComponentFixture<CertficateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertficateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertficateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
