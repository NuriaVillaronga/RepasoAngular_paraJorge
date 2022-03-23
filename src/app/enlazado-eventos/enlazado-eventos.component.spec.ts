import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlazadoEventosComponent } from './enlazado-eventos.component';

describe('EnlazadoEventosComponent', () => {
  let component: EnlazadoEventosComponent;
  let fixture: ComponentFixture<EnlazadoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlazadoEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlazadoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
