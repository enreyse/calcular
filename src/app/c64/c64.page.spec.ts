import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C64Page } from './c64.page';

describe('C64Page', () => {
  let component: C64Page;
  let fixture: ComponentFixture<C64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
