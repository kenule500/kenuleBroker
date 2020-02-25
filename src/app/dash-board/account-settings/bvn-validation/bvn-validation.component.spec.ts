import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvnValidationComponent } from './bvn-validation.component';

describe('BvnValidationComponent', () => {
  let component: BvnValidationComponent;
  let fixture: ComponentFixture<BvnValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BvnValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BvnValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
