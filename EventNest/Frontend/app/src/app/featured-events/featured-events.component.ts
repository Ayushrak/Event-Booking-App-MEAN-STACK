import { Component, OnInit } from '@angular/core';
import { EventsAPIService } from '../events-api.service';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrl: './featured-events.component.css'
})
export class FeaturedEventsComponent implements OnInit {
  events: any[] = [];

  constructor(private EventsAPIService : EventsAPIService) { }

  ngOnInit(): void {
    this.EventsAPIService.getAllEvents().subscribe(data => {
      this.events = data;
      console.log(this.events);
    }, error => {
      console.error('Error fetching events:', error);
    });
  }
}