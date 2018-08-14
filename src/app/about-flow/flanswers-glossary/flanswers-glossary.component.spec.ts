import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersGlossaryComponent } from './flanswers-glossary.component';

describe('FlanswersGlossaryComponent', () => {
  let component: FlanswersGlossaryComponent;
  let fixture: ComponentFixture<FlanswersGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
