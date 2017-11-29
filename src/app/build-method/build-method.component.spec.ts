import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildMethodComponent } from './build-method.component';

describe('BuildMethodComponent', () => {
  let component: BuildMethodComponent;
  let fixture: ComponentFixture<BuildMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
