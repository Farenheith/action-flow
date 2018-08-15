import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersEmailPasswordComponent } from './flanswers-email-password.component';

describe('FlanswersEmailPasswordComponent', () => {
  let component: FlanswersEmailPasswordComponent;
  let fixture: ComponentFixture<FlanswersEmailPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersEmailPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
