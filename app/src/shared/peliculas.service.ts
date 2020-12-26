import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private pelis;

  constructor() {
    this.pelis = JSON.parse(JSON.stringify((require('./movies.json'))));
  }

  public getMovies = () => this.pelis;

  public getMovie = id => this.pelis.filter(k => k.id == id);

}

/* interface movie {
  id: number,
  title: string,
  poster: string, // URL de un póster
  synopsis: string, // Descripción breve
  genres: string[], // Array, Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
  year: number,
  director: string,
  actors: string[], // Array, Nombre de los actores principales.
  hours: string[], // Array, Horario de proyección. ejemplo: Wednesday 19:30, 22:30
  room: number // Número de la sala valor entre 1 y 5.
}; */