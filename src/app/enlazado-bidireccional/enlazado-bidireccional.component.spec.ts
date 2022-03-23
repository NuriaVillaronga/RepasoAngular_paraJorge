import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlazadoBidireccionalComponent } from './enlazado-bidireccional.component';

describe('EnlazadoBidireccionalComponent', () => {
  let component: EnlazadoBidireccionalComponent;
  let fixture: ComponentFixture<EnlazadoBidireccionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlazadoBidireccionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlazadoBidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
