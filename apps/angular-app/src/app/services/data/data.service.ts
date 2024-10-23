import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Location } from '../../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private locationApiUrl = 'http://localhost:3001/locations';
  private usersApiUrl = 'http://localhost:3002/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Get list of locations
  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.locationApiUrl}`);
  }

  // Get a single location by id
  getLocation(id: string): Observable<Location> {
    return this.http.get<Location>(`${this.locationApiUrl}/${id}`);
  }

  // Add a location
  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(`${this.locationApiUrl}`, location);
  }

  // Update a location
  updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(`${this.locationApiUrl}/${location.id}`, location);
  }

  // Get list of users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersApiUrl}`);
  }

  // Get a single user by id
  getUser(user: User): Observable<User> {
    return this.http.get<User>(`${this.usersApiUrl}/${user.id}`);
  }

  // Register a user
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.usersApiUrl}`, user);
  }
}
