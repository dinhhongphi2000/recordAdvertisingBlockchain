import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../models/movie';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  src :any = undefined;
  id : string;
  movie : Movie = new Movie();
  constructor(
    private movieService : MoviesService,
    private route: ActivatedRoute
  ) { 
    
  }
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.route.params.forEach((params: Params) => {

      this.id = params['id'];

      this.movieService.getAMovie(this.id)
      .subscribe(
        result => {
          this.movie = result;
          this.src = this.movie.url;
          console.log(this.movie);
        },
        err =>{
          console.log(err);
        }
      )

    });
  }


}
