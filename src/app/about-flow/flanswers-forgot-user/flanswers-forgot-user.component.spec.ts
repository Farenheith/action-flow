import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersForgotUserComponent } from './flanswers-forgot-user.component';

describe('FlanswersForgotUserComponent', () => {
  let component: FlanswersForgotUserComponent;
  let fixture: ComponentFixture<FlanswersForgotUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersForgotUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersForgotUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
