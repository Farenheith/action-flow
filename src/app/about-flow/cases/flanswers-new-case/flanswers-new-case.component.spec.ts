import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersNewCaseComponent } from './flanswers-new-case.component';

describe('FlanswersNewCaseComponent', () => {
  let component: FlanswersNewCaseComponent;
  let fixture: ComponentFixture<FlanswersNewCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersNewCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersNewCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
