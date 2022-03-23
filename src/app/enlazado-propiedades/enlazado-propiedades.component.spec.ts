import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlazadoPropiedadesComponent } from './enlazado-propiedades.component';

describe('EnlazadoPropiedadesComponent', () => {
  let component: EnlazadoPropiedadesComponent;
  let fixture: ComponentFixture<EnlazadoPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlazadoPropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlazadoPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
