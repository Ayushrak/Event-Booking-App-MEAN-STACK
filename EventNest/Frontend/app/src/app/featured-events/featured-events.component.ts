import { Component, OnInit } from '@angular/core';
import { EventsAPIService } from '../events-api.service';
import { SharedService } from '../shared.service'; // Import SharedService
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrl: './featured-events.component.css'
})
export class FeaturedEventsComponent implements OnInit {
  events: any[] = [];
  rsvpedEvents: Set<string> = new Set();

  constructor(private EventsAPIService : EventsAPIService,private sharedService: SharedService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loadAllEvents();


    this.sharedService.events$.subscribe(updatedEvents => {
      this.events = updatedEvents.map(event => ({
        ...event,
        imageUrl: this.EventsAPIService.getFullImageUrl(event.imageUrl)
      }));
      console.log(this.events);
    });
    
  }

  loadAllEvents(): void {
    this.EventsAPIService.getAllEvents().subscribe(data => {
      this.events = data.map(event => ({
        ...event,
        imageUrl: this.EventsAPIService.getFullImageUrl(event.imageUrl)
      }));
    });
  }
  promptRsvp(eventId: string): void {
    if (!this.authService.isLoggedIn()) {
      // Display a SweetAlert message if not logged in
      Swal.fire({
        title: 'Login Required',
        text: 'You must be logged in to RSVP for events.',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page
          this.router.navigate(['/login']);
        }
      });}
    else if (this.rsvpedEvents.has(eventId)) {
      // Show alert that the event is already RSVPed
      Swal.fire({
        title: 'Already RSVPed',
        text: 'You have already RSVPed for this event.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    } else {
      // Original RSVP confirmation prompt
      Swal.fire({
        title: 'Confirm RSVP',
        text: "Do you want to RSVP for this event?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, RSVP!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.rsvpToEvent(eventId);
        }
      });
    }
  }


  rsvpToEvent(eventId: string): void {
    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      console.error("No user ID found");
      return;
    }

    this.EventsAPIService.addEventToRSVPs(userId, eventId).subscribe(() => {
      Swal.fire(
        'RSVP Successful!',
        'You have successfully RSVPed for the event.',
        'success'
        
      );
      this.rsvpedEvents.add(eventId); 
    }, error => {
      Swal.fire(
        'Error',
        'There was a problem RSVPing to the event.',
        'error'
      );
    });

  }

  isEventRsvped(eventId: string): boolean {
    return this.rsvpedEvents.has(eventId);
  }

 

}
  
  


