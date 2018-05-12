import { Component, OnInit,ViewChild } from '@angular/core';
import * as $ from 'jquery'
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../models/movie';
import {OwlCarousel} from 'ngx-owl-carousel';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel

  fun() {
    this.owlElement.next([2000])
    //duration 2000ms
  }

  movieList : Movie[];
  items : string[] = [];

  constructor(
    private movieService : MoviesService,

  ) { }

  ngOnInit() {

    this.getAllMovies();
    this.fun();
    
  }

  getAllMovies(){
    
    this.movieService.getAllMovies()
    .subscribe(
      result => {
      this.movieList = result;
      console.log(this.items);
      this.getURL(result);
      console.log(this.movieList);
    },
      err => {
        console.log(err);
      }
    )
  }

  getURL(list : Movie[]){
    list.forEach(element => {
      this.items.push(element.poster);
    });
  }


}
