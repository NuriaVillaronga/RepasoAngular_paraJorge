import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiComponentComponent } from './nai-component.component';

describe('NaiComponentComponent', () => {
  let component: NaiComponentComponent;
  let fixture: ComponentFixture<NaiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
