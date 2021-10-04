/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaqInternalComponent } from './faq-internal.component';

describe('FaqInternalComponent', () => {
  let component: FaqInternalComponent;
  let fixture: ComponentFixture<FaqInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
