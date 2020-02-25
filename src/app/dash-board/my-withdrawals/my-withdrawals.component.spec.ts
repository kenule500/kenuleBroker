import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWithdrawalsComponent } from './my-withdrawals.component';

describe('MyWithdrawalsComponent', () => {
  let component: MyWithdrawalsComponent;
  let fixture: ComponentFixture<MyWithdrawalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWithdrawalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
