import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  getEvents() {
    return this.http.get(`${this.uri}/events`);
  }

  getEventById(id) {
   return this.http.get(`${this.uri}/event/${id}`);
  }
}
