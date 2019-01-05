import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:class-name
export interface eventInterface {
  evenName: string;
  eventDetails: string;
  eventContact: number;
  eventVenue: string;
  eventDate: Date;
}

@Injectable({
  providedIn: 'root'
})

export class CreateEventService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  addEvents(events) {
    return this.http.post(`${this.uri}/events`, events);
  }
}
