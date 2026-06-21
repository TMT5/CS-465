import { TestBed } from '@angular/core/testing';

import { TripDataService } from './trip-data';
import { User } from '../app/models/user'; 
import { AuthResponse } from '../app/models/auth-response'; 
import { BROWSER_STORAGE } from '../app/models/storage';

describe('TripData', () => {
  let service: TripDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
