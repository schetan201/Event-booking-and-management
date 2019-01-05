import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<any>(`${this.uri}/users/authenticate`, { username: username, password: password }, this.noAuthHeader)
        .pipe(map(user => {
            return user;
        }));
}
  getById(id: number) {
      return this.http.get(`${this.uri}/users/` + id);
  }
  setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }
  getUserId() {
    return localStorage.getItem('userId');
  }

  deleteEvent(id) {
    return this.http.delete(`${this.uri}/events/${id}`);
  }

  getEventForUser(userId){
    return this.http.get(`${this.uri}/events/${userId}`);
  }


editEvent(id) {
  console.log('in before edit service');
  return this.http.delete(`${this.uri}/events/${id}`);
}

  register(user) {
      return this.http.post(`${this.uri}/users/register/`, user, this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getUserProfile() {
    return this.http.get(`${this.uri}/userProfile`);
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
