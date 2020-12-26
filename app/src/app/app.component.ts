import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../shared/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private pel: PeliculasService
  ) {
    
    let pelis = pel.getMovie(1);

    console.log(pelis)
  }


}



