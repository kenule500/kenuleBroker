import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WePayComponent } from './we-pay.component';

describe('WePayComponent', () => {
  let component: WePayComponent;
  let fixture: ComponentFixture<WePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
