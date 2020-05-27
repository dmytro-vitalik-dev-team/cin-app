import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoonInCinemaComponent } from './soon-in-cinema.component';

export const soonInCinemaRoutes: Routes = [
  { path: '', component: SoonInCinemaComponent },
  // { path: '' , redirectTo: 'movie', pathMatch:'full' },
  { path: '**', redirectTo: 'movie', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(soonInCinemaRoutes)],
  exports: [RouterModule]
})
export class SoonInCinemaRoutingModule { }