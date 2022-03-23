import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillaComponentComponent } from './filla-component.component';

describe('FillaComponentComponent', () => {
  let component: FillaComponentComponent;
  let fixture: ComponentFixture<FillaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
