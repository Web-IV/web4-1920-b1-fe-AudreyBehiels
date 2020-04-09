import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSchrijverComponent } from './film-schrijver.component';

describe('FilmSchrijverComponent', () => {
  let component: FilmSchrijverComponent;
  let fixture: ComponentFixture<FilmSchrijverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSchrijverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSchrijverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
