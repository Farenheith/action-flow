import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersBeneficiaryTypeComponent } from './flanswers-beneficiary-type.component';

describe('FlanswersBeneficiaryTypeComponent', () => {
  let component: FlanswersBeneficiaryTypeComponent;
  let fixture: ComponentFixture<FlanswersBeneficiaryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersBeneficiaryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersBeneficiaryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
