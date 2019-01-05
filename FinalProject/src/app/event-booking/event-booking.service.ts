import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  //call to backend server with http post method
  bookEvent(events) {
    return this.http.post(`${this.uri}/bookEvent`, events);
  }
}
