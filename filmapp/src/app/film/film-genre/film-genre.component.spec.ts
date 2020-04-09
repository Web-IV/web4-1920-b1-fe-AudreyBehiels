import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGenreComponent } from './film-genre.component';

describe('FilmGenreComponent', () => {
  let component: FilmGenreComponent;
  let fixture: ComponentFixture<FilmGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
