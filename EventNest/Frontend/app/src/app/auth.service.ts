import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/TPL/Users';

  private loginStatusSubject = new BehaviorSubject<boolean>(false);
  loginStatus$ = this.loginStatusSubject.asObservable();
  private currentUser: User | null = null;


  constructor(private http: HttpClient) {
    //condition added to handle sessionStorage only in a browser environemnt 
    if (typeof window !== 'undefined') {

     const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
     if (isLoggedIn) {
         this.reinitializeUser();
         this.loginStatusSubject.next(true);
     }
  }
   }
  // Method to handle user registration
   register(user: User) {
    return this.http.post(`${this.baseUrl}/Register`, user);
  }

  //Method to handle user login 
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, { email, password });

  }


  // These are called when user is logged in 

  setUser(user: User) {
    this.currentUser = user;
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', user.Username); // Storing the username
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('userId',user._id);
    console.log("user has been set");
    //login status emitted 
    this.loginStatusSubject.next(true);
    console.log('Emitting login status: true');
  }

  // Method to get current user's ID
  getCurrentUserId(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('userId');
    } else {
      return null; // Explicitly return null when window is undefined
    }
  }
  
  clearUser() {
    this.currentUser = null;
    //logout status emitted
    console.log("user has been cleared");

    this.loginStatusSubject.next(false);
    console.log('Emitting login status: false');

  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getUserInitials(): string {
    return this.currentUser ? (this.currentUser.Username[0] ?? '') : '';
  }


  //user re-initialization after logout 
  private reinitializeUser(): void {
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const userId = sessionStorage.getItem('userId'); 

    if (username && email && userId) {
        this.currentUser = { 
            _id: userId, 
            Username: username, 
            email: email, 
            password: '', 
            rsvp: [], 
            myEvents: [] 
        };
    }
}

//user logout 
 logout() {
    sessionStorage.clear(); // Clear all session storage items
    this.clearUser();
  }

  
}