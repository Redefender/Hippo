import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFigureComponent } from './person-figure.component';

describe('PersonFigureComponent', () => {
  let component: PersonFigureComponent;
  let fixture: ComponentFixture<PersonFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
