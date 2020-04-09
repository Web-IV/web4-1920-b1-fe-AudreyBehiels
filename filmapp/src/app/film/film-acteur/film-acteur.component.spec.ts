import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmActeurComponent } from './film-acteur.component';

describe('FilmActeurComponent', () => {
  let component: FilmActeurComponent;
  let fixture: ComponentFixture<FilmActeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmActeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
