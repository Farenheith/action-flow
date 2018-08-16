import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanswersWhichUserComponent } from './flanswers-which-user.component';

describe('FlanswersWhichUserComponent', () => {
  let component: FlanswersWhichUserComponent;
  let fixture: ComponentFixture<FlanswersWhichUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlanswersWhichUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanswersWhichUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
