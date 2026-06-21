import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TripCardComponent } from '../trip-card/trip-card';
import { Trip } from '../models/trips';
import { TripDataService } from '../../services/trip-data';
import { AuthenticationService } from '../../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing {
  trips$: Observable<Trip[]>;

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log('trip-listing constructor');
    this.trips$ = this.tripDataService.getTrips();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
    public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}