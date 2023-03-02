import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinancingComponent } from './page-financing.component';

describe('PageFinancingComponent', () => {
  let component: PageFinancingComponent;
  let fixture: ComponentFixture<PageFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFinancingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
