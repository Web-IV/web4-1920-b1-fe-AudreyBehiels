import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {
  @Input() public film : Film;
  constructor() { }

  ngOnInit(): void {
  }

}
