import { Component, OnInit, Input } from '@angular/core';
import { FilmSchrijver } from '../filmSchrijver.model';

@Component({
  selector: 'app-film-schrijver',
  templateUrl: './film-schrijver.component.html',
  styleUrls: ['./film-schrijver.component.css']
})
export class FilmSchrijverComponent implements OnInit {
@Input() filmSchrijver : FilmSchrijver;
  constructor() { }

  ngOnInit(): void {
  }

}
