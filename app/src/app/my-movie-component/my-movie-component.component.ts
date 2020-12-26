import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../shared/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.scss']
})
export class MyMovieComponentComponent implements OnInit {

  constructor(private pelis: PeliculasService, private route: ActivatedRoute) { }

  pelicula;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.pelis.getMovie(id)[0];

  }

}
