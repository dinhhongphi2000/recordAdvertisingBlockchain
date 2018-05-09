import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service'
import { Movie } from '../../services/class/movie';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  src :any = undefined;
  movie : Movie = new Movie();
  constructor(
    private movieService : MoviesService,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      let id = +params['id'];

      this.movieService.getAMovie(id.toString())
      .then(
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
