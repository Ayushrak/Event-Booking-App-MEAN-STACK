import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsAPIService {
  private currentCategory = new BehaviorSubject<string>('all');
  private currentEvents = new BehaviorSubject<any[]>([]);
  
  private baseUrl = 'http://localhost:3000/TPL/Events'; // Adjust if your URL is different

  constructor(private http: HttpClient) { 

  }

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  getEventsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/byCategory/${category}`);
  }
 
}
