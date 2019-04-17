import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C128rPage } from './c128r.page';

describe('C128rPage', () => {
  let component: C128rPage;
  let fixture: ComponentFixture<C128rPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C128rPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C128rPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
