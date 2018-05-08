import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../services/class/movie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  movieList : Movie[];
  constructor(
    private movieService : MoviesService,
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAllMovies()
    .then(
      result => {
      this.movieList = result;
      console.log(this.movieList);
    },
      err => {
        console.log(err);
      }
    )
  }


}
