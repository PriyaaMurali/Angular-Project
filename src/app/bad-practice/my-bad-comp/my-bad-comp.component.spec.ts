import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBadCompComponent } from './my-bad-comp.component';

describe('MyBadCompComponent', () => {
  let component: MyBadCompComponent;
  let fixture: ComponentFixture<MyBadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBadCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
