import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C96rPage } from './c96r.page';

describe('C96rPage', () => {
  let component: C96rPage;
  let fixture: ComponentFixture<C96rPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C96rPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C96rPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
