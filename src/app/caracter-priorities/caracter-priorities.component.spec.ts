import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterPrioritiesComponent } from './caracter-priorities.component';

describe('CaracterPrioritiesComponent', () => {
  let component: CaracterPrioritiesComponent;
  let fixture: ComponentFixture<CaracterPrioritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracterPrioritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterPrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
