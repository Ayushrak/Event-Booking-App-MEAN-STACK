import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsAPIService {
  private baseUrl = 'http://localhost:3000/TPL/Events'; // Adjust if your URL is different

  constructor(private http: HttpClient) { 

  }

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

}
