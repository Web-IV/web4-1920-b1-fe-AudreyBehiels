import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenFilmLijstComponent } from './eigen-film-lijst.component';

describe('EigenFilmLijstComponent', () => {
  let component: EigenFilmLijstComponent;
  let fixture: ComponentFixture<EigenFilmLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenFilmLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenFilmLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
