import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SessionComponent } from './session/session.component';

export const movieRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'session/:id', component: SessionComponent },
  // { path: '' , redirectTo: 'movie', pathMatch:'full' },
  { path: '**', redirectTo: 'movie', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }