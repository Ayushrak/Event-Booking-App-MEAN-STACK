import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsAPIService {
  private currentCategory = new BehaviorSubject<string>('all');
  private currentEvents = new BehaviorSubject<any[]>([]);
  
  private EventBaseUrl = 'http://localhost:3000/TPL/Events'; // Adjust if your URL is different
  private userBaseUrl = 'http://localhost:3000/TPL/Users'; // URL for user-related operations
  private staticBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { 

  }

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.EventBaseUrl}/all`);
  }    

  getEventsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.EventBaseUrl}/byCategory/${category}`);
  }

  createEvent(eventData: any): Observable<any> {
    console.log("event object posted");
    return this.http.post(`${this.EventBaseUrl}/add`, eventData);

  }

  addToMyEvents(userId: string, eventId: string): Observable<any> {
    return this.http.post(`${this.userBaseUrl}/user/${userId}/myEvents/${eventId}`, {});
  }


  getFullImageUrl(imagePath: string): string {
    if (!imagePath) {
      return ''; // Return a default image path or an empty string if imagePath is not provided
    }
    // Check if imagePath is a complete URL
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath; // Return the imagePath as is
    }
    // If imagePath is a relative path, prepend the backend base URL
    return `${this.staticBaseUrl}${imagePath}`;
  }



  /*******************************user events*****************************/
  getUserEvents(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.userBaseUrl}/user/${userId}/myEvents`);
  }

  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete(`${this.EventBaseUrl}/delete/${eventId}`);
  }


  addEventToRSVPs(userId: string, eventId: string): Observable<any> {
    return this.http.post(`${this.userBaseUrl}/user/${userId}/rsvp/${eventId}`, {});
  }
  
  // Method to get RSVP'd events for a user
  getUserRSVPs(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.userBaseUrl}/user/${userId}/rsvp`);
  }
}
