import { Component } from '@angular/core';
import { EventsAPIService} from '../events-api.service'; // Update the path as needed
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-filter-nav-bar',
  templateUrl: './filter-nav-bar.component.html',
  styleUrl: './filter-nav-bar.component.css'
})
export class FilterNavBarComponent {
  categories: string[] = ['All', 'Concert', 'Conference', 'Dance', 'Education', 'Party', 'Travel', 'Experience', 'Festival', 'Movie'];

  constructor(private eventsAPIService: EventsAPIService, private sharedService: SharedService) {}

  ngOnInit(): void {
    // Trigger 'All' filter by default on initialization
    this.filterEvents('All');
  }
  filterEvents(category: string): void {
    if (category === 'All') {
      this.eventsAPIService.getAllEvents().subscribe(events => {
        this.sharedService.updateEvents(events);
      });
    } else {
      this.eventsAPIService.getEventsByCategory(category).subscribe(events => {
        this.sharedService.updateEvents(events);
      });
    }
  }
 
}
