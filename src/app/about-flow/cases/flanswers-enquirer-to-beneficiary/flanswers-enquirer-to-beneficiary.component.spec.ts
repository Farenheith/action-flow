import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersEnquirerToBeneficiaryComponent } from './flanswers-enquirer-to-beneficiary.component';

describe('FlanswersEnquirerToBeneficiaryComponent', () => {
  let component: FlanswersEnquirerToBeneficiaryComponent;
  let fixture: ComponentFixture<FlanswersEnquirerToBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersEnquirerToBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersEnquirerToBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
