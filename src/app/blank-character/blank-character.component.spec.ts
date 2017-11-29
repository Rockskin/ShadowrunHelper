import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankCharacterComponent } from './blank-character.component';

describe('BlankCharacterComponent', () => {
  let component: BlankCharacterComponent;
  let fixture: ComponentFixture<BlankCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
