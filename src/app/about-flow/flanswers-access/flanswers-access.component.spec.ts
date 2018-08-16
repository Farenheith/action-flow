import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersAccessComponent } from './flanswers-access.component';

describe('FlanswersAccessComponent', () => {
  let component: FlanswersAccessComponent;
  let fixture: ComponentFixture<FlanswersAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
