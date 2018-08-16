import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersBeneficiaryIncludingComponent } from './flanswers-beneficiary-including.component';

describe('FlanswersBeneficiaryIncludingComponent', () => {
  let component: FlanswersBeneficiaryIncludingComponent;
  let fixture: ComponentFixture<FlanswersBeneficiaryIncludingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersBeneficiaryIncludingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersBeneficiaryIncludingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
