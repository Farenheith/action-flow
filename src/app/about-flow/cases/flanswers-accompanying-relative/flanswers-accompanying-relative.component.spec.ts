import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersAccompanyingRelativeComponent } from './flanswers-accompanying-relative.component';

describe('FlanswersAccompanyingRelativeComponent', () => {
  let component: FlanswersAccompanyingRelativeComponent;
  let fixture: ComponentFixture<FlanswersAccompanyingRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersAccompanyingRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersAccompanyingRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
