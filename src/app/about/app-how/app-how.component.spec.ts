import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHowComponent } from './app-how.component';

describe('AppHowComponent', () => {
  let component: AppHowComponent;
  let fixture: ComponentFixture<AppHowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
