import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { MovieBunnerComponent } from './movie-bunner/movie-bunner.component';
import { SessionComponent } from './session/session.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieBunnerComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
