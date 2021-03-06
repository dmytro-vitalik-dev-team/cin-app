import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './layouts/navbar/navbar.module';
import { SidebarModule } from './layouts/sidebar/sidebar.module';
import { FooterModule } from './layouts/footer/footer.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BunnerModule } from './shared/bunner/bunner.module';
import { SoonInCinemaModule } from './modules/soon-in-cinema/soon-in-cinema.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule,
    BunnerModule,
    SoonInCinemaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
