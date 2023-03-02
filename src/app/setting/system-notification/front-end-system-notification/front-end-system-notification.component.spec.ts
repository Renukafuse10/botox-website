import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndSystemNotificationComponent } from './front-end-system-notification.component';

describe('FrontEndSystemNotificationComponent', () => {
  let component: FrontEndSystemNotificationComponent;
  let fixture: ComponentFixture<FrontEndSystemNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndSystemNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndSystemNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
