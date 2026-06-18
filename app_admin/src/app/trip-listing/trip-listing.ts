// import { Component, OnInit } from '@angular/core';
// import { TripCardComponent } from '../trip-card/trip-card';
// import { Trip } from '../models/trips';
// import { TripDataService } from '../../services/trip-data';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-trip-listing',
//   imports: [TripCardComponent],
//   templateUrl: './trip-listing.html',
//   styleUrl: './trip-listing.css',
// })
// export class TripListing implements OnInit {
//   trips: Trip[] = [];
//   message: string = '';

//   constructor(
//     private tripDataService: TripDataService,
//     private router: Router
//   ) {
//     console.log('trip-listing constructor');
//   }
//   public addTrip(): void {
//     this.router.navigate(['add-trip']);
//   }
//   private getStuff(): void {
//     this.tripDataService.getTrips()
//       .subscribe({
//         next: (value: Trip[]) => {
//           console.log('Trips from API:', value);
//           console.log('Trips length:', value.length);

//           this.trips = value;

//           this.message = 'There are ' + this.trips.length + ' trips available.';

//           console.log(this.message);
//         },
//         error: (error: any) => {
//           console.log('Error loading trips:', error);
//           this.message = 'Error loading trips';
//         }
//       });
// }

//   ngOnInit(): void {
//     console.log('ngOnInit');
//     this.getStuff();
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TripCardComponent } from '../trip-card/trip-card';
import { Trip } from '../models/trips';
import { TripDataService } from '../../services/trip-data';

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
    private router: Router
  ) {
    console.log('trip-listing constructor');
    this.trips$ = this.tripDataService.getTrips();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}