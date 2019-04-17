import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C128Page } from './c128.page';

describe('C128Page', () => {
  let component: C128Page;
  let fixture: ComponentFixture<C128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
