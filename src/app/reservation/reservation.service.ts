import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor(){
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations? JSON.parse(savedReservations): [];
  }

  //........ CRUD ........

  // Read
  getReservations(): Reservation[]{
    return this.reservations;
  }

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res => res.id ===id);
  }

  //Create

  addReservation(reservation: Reservation): void{
    reservation.id = Date.now().toString();
    
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  //Delete

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id===id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  //Update

  updateReservation(updateReservation: Reservation): void{
    let index = this.reservations.findIndex(res => res.id === updateReservation.id)
    this.reservations[index] = updateReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
