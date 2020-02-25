import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFaSettingsComponent } from './two-fa-settings.component';

describe('TwoFaSettingsComponent', () => {
  let component: TwoFaSettingsComponent;
  let fixture: ComponentFixture<TwoFaSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFaSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
