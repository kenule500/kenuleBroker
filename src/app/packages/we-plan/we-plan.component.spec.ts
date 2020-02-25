import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WePlanComponent } from './we-plan.component';

describe('WePlanComponent', () => {
  let component: WePlanComponent;
  let fixture: ComponentFixture<WePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
