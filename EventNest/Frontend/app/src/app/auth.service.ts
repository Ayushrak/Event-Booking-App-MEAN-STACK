import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/TPL/Users';
  constructor(private http: HttpClient) {



   }

   register(user: any) {
    return this.http.post(`${this.baseUrl}/Register`, user);
  }

}