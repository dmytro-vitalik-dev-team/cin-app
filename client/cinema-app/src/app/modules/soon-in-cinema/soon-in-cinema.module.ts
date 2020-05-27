import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoonInCinemaComponent } from './soon-in-cinema.component';
import { SoonInCinemaRoutingModule } from './soon-in-cinema-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SoonInCinemaRoutingModule
  ],
  declarations: [SoonInCinemaComponent]
})
export class SoonInCinemaModule {}