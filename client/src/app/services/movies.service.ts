import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';
import { Movie } from './class/movie'

@Injectable()
export class MoviesService {
  urlmovie : string = "api/films";
  constructor(
    public http : HttpClient,
  ) { }
  getAllMovies():Promise<any>{
    
    return Promise((resolve,reject) => {
      this.http.get<Movie[]>(this.urlmovie).subscribe(
        data=>{
            resolve(data as Movie[]);
          
        },
        error=>{
          reject(error);
        }
      )
    }) 
  }

  getAMovie():Promise<any>{
    
    return Promise((resolve,reject) => {
      this.http.get<Movie>(this.urlmovie).subscribe(
        data=>{
            resolve(data as Movie);
          
        },
        error=>{
          reject(error);
        }
      )
    }) 
  }
}
