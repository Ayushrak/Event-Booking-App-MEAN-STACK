import { Component } from '@angular/core';
import { EventsAPIService } from '../events-api.service';
import { AuthService } from '../auth.service';


interface EventData {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventPlace: string, 
  eventCategory: string;
  eventDescription: string;
  eventImage: File | null;
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})

export class CreateEventComponent {
  eventData:EventData = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventPlace:'',
    eventCategory: '',
    eventDescription: '',
    eventImage: null // Initially null, will be set when a file is selected
  };

  constructor(private eventService:EventsAPIService, private authService:AuthService) {}
    
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.eventData.eventImage = event.target.files[0];
    }
  }
  onCreateEvent() {
    if (!this.authService.isLoggedIn()) {
      console.error("User is not logged in");
      return;
    }

    const userId = this.authService.getCurrentUserId();
    if (!userId) {
      console.error("No user ID found");
      return;
    }

    // Prepare FormData for file upload
    const formData = new FormData();
    formData.append('Title', this.eventData.eventName);
    formData.append('Date', this.eventData.eventDate);
    this.eventData.eventTime = this.convertTo24HourFormat(this.eventData.eventTime);
    formData.append('location', this.eventData.eventPlace);
    formData.append('Time', this.eventData.eventTime);
    formData.append('Category', this.eventData.eventCategory);
    formData.append('description', this.eventData.eventDescription);
    if (this.eventData.eventImage) {
      formData.append('imageFile', this.eventData.eventImage, this.eventData.eventImage.name);
    }

    this.eventService.createEvent(formData).subscribe(
      (response: any) => {
        const eventId = response._id;
        this.eventService.addToMyEvents(userId, eventId).subscribe(
          (res) =>{
            console.log("Event should be added here");
            console.log('Event added to myEvents', res)}, 
          (error) =>{
            console.log("********Error**********-");
            console.error(error)}, 
        );
      },
      (error) => console.error(error)
    );
  }

  convertTo24HourFormat(timeStr: string): string {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = String(parseInt(hours, 10) + 12);
    }
  
    return `${hours}:${minutes}`;
  }
  
}


