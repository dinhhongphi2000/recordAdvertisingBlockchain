import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie'

@Injectable()
export class MoviesService {
  urlmovie : string = "api/films";
  constructor(
    public http : HttpClient,
  ) { }
  getAllMovies(){
     return this.http.get<Movie[]>(this.urlmovie);
  }

  getAMovie(id : string){
    return this.http.get<Movie>(`${this.urlmovie}/${id}`);
  }
}
