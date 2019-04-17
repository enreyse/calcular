import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C96Page } from './c96.page';

describe('C96Page', () => {
  let component: C96Page;
  let fixture: ComponentFixture<C96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
