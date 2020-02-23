import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';

// import {MovieBunnerComponent} from '../movie-bunner/movie-bunner.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  public moviesTmp = [
    { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/9c/5d/9c5d20945ab1509a7bd67232c261fa41.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/58/35/583593441a8af5accb5585d608ca003b.jpeg' },
    { name: 'test2', imgUrl: 'https://multiplex.ua/images/ec/3b/ec3b1e5e537bbd8d109c9b750131c063.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/85/a8/85a8858c84aeeef9a2d13477193512b0.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/9c/5d/9c5d20945ab1509a7bd67232c261fa41.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/58/35/583593441a8af5accb5585d608ca003b.jpeg' },
    { name: 'test', imgUrl: 'https://multiplex.ua/images/ec/3b/ec3b1e5e537bbd8d109c9b750131c063.jpeg' }
  ];
  title = 'Landing page';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovies();

    this.route.queryParams.subscribe(params => {
      if (params.title) {
        this.title = params.title;
      }
      console.log(params);
    });
    if (this.route.snapshot.routeConfig.path === '404') {
      this.title = '404 unknown link';
    }
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res.data;
    }, error => console.error(error));
  }

  nextMovie(next: boolean) {
    console.log(next)
    let el = document.getElementsByClassName("carousel-inner")
    next ? el[0].scrollLeft += 375 : el[0].scrollLeft -= 375

  }
}
