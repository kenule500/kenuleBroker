import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorRetreatComponent } from './senior-retreat.component';

describe('SeniorRetreatComponent', () => {
  let component: SeniorRetreatComponent;
  let fixture: ComponentFixture<SeniorRetreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorRetreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorRetreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
