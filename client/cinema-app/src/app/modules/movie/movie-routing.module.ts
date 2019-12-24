import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

export const movieRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '' , redirectTo: 'movie/movies', pathMatch:'full' },
  { path: '**', redirectTo: 'movie/movies', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }