import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private urls: MovieUrls;

  constructor(public http: HttpClient) {
    this.urls = new MovieUrls();
  }

  public getMovies() {    
    return this.http.get<any>(this.urls.movieUrl);
  }

  public getMovieById(movieId) {    
    return this.http.get<any>(this.urls.movieUrl + '/' + movieId);
  }

  public updateMovie(movie: Movie) {    
    return this.http.put<any>(this.urls.movieUrl + '/update', movie);
  }

  public createMovie(movie: Movie) {    
    return this.http.post<any>(this.urls.movieUrl + '/create', movie);
  }

  public deleteMovie(id) {    
    return this.http.delete<any>(this.urls.movieUrl + '/' + id);
  }
}

class MovieUrls {
  public movieUrl = '/api/movies';
}
