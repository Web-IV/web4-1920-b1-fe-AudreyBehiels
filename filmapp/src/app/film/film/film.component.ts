import { Component, OnInit, Input } from '@angular/core';
import{Film} from '../film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

 @Input() public film : Film;
  constructor() {  }

  ngOnInit() { }

}
