import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../shared/peliculas.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private pelis: PeliculasService) {}

  pelicules = this.pelis.getMovies();

  ngOnInit(): void {}

}
