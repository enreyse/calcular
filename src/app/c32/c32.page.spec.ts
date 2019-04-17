import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C32Page } from './c32.page';

describe('C32Page', () => {
  let component: C32Page;
  let fixture: ComponentFixture<C32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
