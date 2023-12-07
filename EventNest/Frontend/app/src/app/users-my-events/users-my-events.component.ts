import { Component } from '@angular/core';
import { EventsAPIService } from '../events-api.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-my-events',
  templateUrl: './users-my-events.component.html',
  styleUrl: './users-my-events.component.css'
})
export class UsersMyEventsComponent {

  userEvents: any[] = [];

  constructor(private eventsService: EventsAPIService, private authService: AuthService) { }

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.eventsService.getUserEvents(userId).subscribe(events => {
        console.log("here you can see user events for this")
        this.userEvents = events;
        console.log(this.userEvents);
      });
    }
  }

  deleteUserEvent(eventId: string, index: number): void {
    // SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deletion if confirmed
        this.eventsService.deleteEvent(eventId).subscribe(() => {
          // Remove the event from the userEvents array
          this.userEvents.splice(index, 1);
          Swal.fire(
            'Deleted!',
            'Your event has been deleted.',
            'success'
          );
        }, error => {
          console.error('Error deleting event:', error);
        });
      }
    });
  }
}
  