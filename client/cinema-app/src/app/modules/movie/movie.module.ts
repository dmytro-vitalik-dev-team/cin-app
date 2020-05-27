import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { SessionComponent } from './session/session.component';
import { MovieBunnerComponent } from './movie-bunner/movie-bunner.component';
import { BunnerModule } from 'src/app/shared/bunner/bunner.module';


@NgModule({
  declarations: [
    MovieBunnerComponent,
    MoviesComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieRoutingModule,
    BunnerModule
  ],
  // exports: [
  //   MovieBunnerComponent
  // ]
})
export class MovieModule { }
