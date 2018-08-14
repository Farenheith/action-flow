import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGoalComponent } from './app-goal.component';

describe('AppGoalComponent', () => {
  let component: AppGoalComponent;
  let fixture: ComponentFixture<AppGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
