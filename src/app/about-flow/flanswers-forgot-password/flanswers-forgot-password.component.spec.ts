import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersForgotPasswordComponent } from './flanswers-forgot-password.component';

describe('FlanswersForgotPasswordComponent', () => {
  let component: FlanswersForgotPasswordComponent;
  let fixture: ComponentFixture<FlanswersForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
