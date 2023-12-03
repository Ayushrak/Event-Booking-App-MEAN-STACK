export interface User {
    Username: string;
    email: string;
    password: string;
    rsvp?: string[]; // Assuming RSVPs are an array of Event IDs
  }