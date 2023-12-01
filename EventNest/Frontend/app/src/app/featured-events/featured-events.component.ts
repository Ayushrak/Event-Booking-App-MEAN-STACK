import { Component, OnInit } from '@angular/core';
import { EventsAPIService } from '../events-api.service';
import { SharedService } from '../shared.service'; // Import SharedService

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrl: './featured-events.component.css'
})
export class FeaturedEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private EventsAPIService : EventsAPIService,private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loadAllEvents();


    this.sharedService.events$.subscribe(updatedEvents => {
      this.events = updatedEvents;
      console.log(this.events);
    });
    
  }

  loadAllEvents(): void {
    this.EventsAPIService.getAllEvents().subscribe(data => {
      this.events = data;
    });
  }

}

