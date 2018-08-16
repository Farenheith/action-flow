import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersCheckingBeneficiaryComponent } from './flanswers-checking-beneficiary.component';

describe('FlanswersCheckingBeneficiaryComponent', () => {
  let component: FlanswersCheckingBeneficiaryComponent;
  let fixture: ComponentFixture<FlanswersCheckingBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersCheckingBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersCheckingBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
