import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'movie',
    component: ContentLayoutComponent,
    loadChildren: () => import('./modules/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'soon-in-cinema',
    component: ContentLayoutComponent,
    loadChildren: () => import('./modules/soon-in-cinema/soon-in-cinema.module').then(m => m.SoonInCinemaModule)
  },
  // {
  //   path: 'movie/session',
  //   component: ContentLayoutComponent,
  //   loadChildren: './modules/movie/movie.module#SessionComponent'
  // },
  { path: '**', redirectTo: '/auth/login', pathMatch:'full' }
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