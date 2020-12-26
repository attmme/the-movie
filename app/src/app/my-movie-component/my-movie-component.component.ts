import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../shared/peliculas.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss']
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private pelis: PeliculasService) {}

  pelicula = this.pelis.getMovie(1)[0];

  ngOnInit(): void {
  }

}
