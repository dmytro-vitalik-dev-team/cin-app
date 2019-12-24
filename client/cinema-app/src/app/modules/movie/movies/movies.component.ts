import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  title = 'Landing page';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.getMovies();

    this.route.queryParams.subscribe(params => {
      if(params.title) {
          this.title = params.title;
      }
      console.log(params);
    });
    if(this.route.snapshot.routeConfig.path === '404') {
        this.title = '404 unknown link';
    }
  }

  getMovies(){
    this.movieService.getMovies().subscribe(res => {
      this.movies = res.data;
    }, error => console.error(error));
  }
}
