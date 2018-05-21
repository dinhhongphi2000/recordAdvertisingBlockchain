import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AdvertisementService } from '../../services/advertisement.service'
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
    private adService : AdvertisementService,
    private route: ActivatedRoute
  ) { 
    
  }
  ngOnInit(){

  }

  ngAfterViewInit() {
    this.route.params.forEach((params: Params) => {

      this.id = params['id'];
      this.adService.GetRandom()
      .subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      )

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
