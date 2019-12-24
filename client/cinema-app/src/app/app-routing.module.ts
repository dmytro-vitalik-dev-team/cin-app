import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

export const AppRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'movie/movies',
    pathMatch: 'full'
  },
  { 
    path: 'movie',
    component: ContentLayoutComponent,
    loadChildren: () => import('./modules/movie/movie.module').then(m => m.MovieModule)
  },
  { path: '**', redirectTo: 'movie', pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }