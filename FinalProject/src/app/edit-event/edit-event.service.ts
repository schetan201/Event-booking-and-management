import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface eventInterface{
  evenName: string;
  eventDetails: string;
  eventContact: number;
  eventVenue: string;
  eventDate: Date
}

@Injectable({
  providedIn: 'root'
})
export class EditEventService {

  event: {
    evenName: '';
    eventDetails: '';
    eventContact: '';
    eventVenue: '';
    eventDate: ''
  };


  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  editEvents(events) {
    return this.http.put(`${this.uri}/events/${events.eventId}`,events);
  }

  deleteEvent(id) {
    console.log('in before delete service');
    return this.http.delete(`${this.uri}/events/${id}`);
  }
}
