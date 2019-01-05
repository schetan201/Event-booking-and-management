import { TestBed } from '@angular/core/testing';

import { EventBookingService } from './event-booking.service';

describe('EventBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventBookingService = TestBed.get(EventBookingService);
    expect(service).toBeTruthy();
  });
});
