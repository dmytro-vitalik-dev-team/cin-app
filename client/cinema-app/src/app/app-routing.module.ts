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
    loadChildren: './modules/authentication/authentication.module#AuthenticationModule'
  },
  { 
    path: 'movie',
    component: ContentLayoutComponent,
    loadChildren: './modules/movie/movie.module#MovieModule'
  },
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