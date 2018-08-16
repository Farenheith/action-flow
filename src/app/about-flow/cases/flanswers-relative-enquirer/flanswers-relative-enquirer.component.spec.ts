import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersRelativeEnquirerComponent } from './flanswers-relative-enquirer.component';

describe('FlanswersRelativeEnquirerComponent', () => {
  let component: FlanswersRelativeEnquirerComponent;
  let fixture: ComponentFixture<FlanswersRelativeEnquirerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersRelativeEnquirerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersRelativeEnquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
