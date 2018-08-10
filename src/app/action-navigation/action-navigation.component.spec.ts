import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNavigationComponent } from './action-navigation.component';

describe('ActionNavigationComponent', () => {
  let component: ActionNavigationComponent;
  let fixture: ComponentFixture<ActionNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
