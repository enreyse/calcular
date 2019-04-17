import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C64rPage } from './c64r.page';

describe('C64rPage', () => {
  let component: C64rPage;
  let fixture: ComponentFixture<C64rPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C64rPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C64rPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
