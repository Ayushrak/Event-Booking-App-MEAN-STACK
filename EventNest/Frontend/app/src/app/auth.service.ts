import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/TPL/Users';
  constructor(private http: HttpClient) {



   }
  // Method to handle user registration
   register(user: User) {
    return this.http.post(`${this.baseUrl}/Register`, user);
  }

  //Method to handle user login 
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, { email, password });
  }

}