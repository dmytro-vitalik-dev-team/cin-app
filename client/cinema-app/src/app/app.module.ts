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
// import { SessionComponent } from './modules/movie/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    // SessionComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
