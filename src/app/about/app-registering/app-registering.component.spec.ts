import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegisteringComponent } from './app-registering.component';

describe('AppRegisteringComponent', () => {
  let component: AppRegisteringComponent;
  let fixture: ComponentFixture<AppRegisteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRegisteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRegisteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
