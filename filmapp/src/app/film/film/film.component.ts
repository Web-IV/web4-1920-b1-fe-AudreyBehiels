import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  name : string
  constructor() { 
    this.name = "titanic"
    
  }

  ngOnInit(): void {
  }

}
