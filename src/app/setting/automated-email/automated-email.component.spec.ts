import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedEmailComponent } from './automated-email.component';

describe('AutomatedEmailComponent', () => {
  let component: AutomatedEmailComponent;
  let fixture: ComponentFixture<AutomatedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatedEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
