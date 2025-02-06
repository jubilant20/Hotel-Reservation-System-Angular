import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule,
    HomeModule,
    ReservationModule
  ],
  providers: [],
})
export class AppModule { }
