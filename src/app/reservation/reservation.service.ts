import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  //........ CRUD ........

  // Read
  getResrvation(): Reservation[]{
    return this.reservations;
  }

  getReservation(id:string):Reservation | undefined{
    return this.reservations.find(res => res.id ===id);
  }

  //Create

  addReservation(reservation: Reservation): void{
    this.reservations.push(reservation);
  }

  //Delete

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id===id);
    this.reservations.splice(index,1);
  }

  //Update

  updateReservation(updateReservation: Reservation): void{
    let index = this.reservations.findIndex(res => res.id === updateReservation.id)
    this.reservations[index] = updateReservation;
  }
}
