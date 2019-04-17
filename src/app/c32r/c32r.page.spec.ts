import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C32rPage } from './c32r.page';

describe('C32rPage', () => {
  let component: C32rPage;
  let fixture: ComponentFixture<C32rPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C32rPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C32rPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
