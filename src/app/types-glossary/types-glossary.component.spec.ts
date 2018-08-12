import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesGlossaryComponent } from './types-glossary.component';

describe('TypesGlossaryComponent', () => {
  let component: TypesGlossaryComponent;
  let fixture: ComponentFixture<TypesGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
