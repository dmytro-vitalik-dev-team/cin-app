import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
