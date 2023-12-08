import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private eventsSource = new BehaviorSubject<any[]>([]);
  constructor() {}

  updateEvents(events: any[]): void {
    this.eventsSource.next(events);
  }

  get events$(): Observable<any[]> {
    return this.eventsSource.asObservable();
  }

 
}
