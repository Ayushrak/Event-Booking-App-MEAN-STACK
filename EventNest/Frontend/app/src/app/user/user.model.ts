export interface User {
    _id: string;
    Username: string;
    email: string;
    password: string;
    rsvp?: string[]; // Optional array of RSVP event IDs
    myEvents?: string[]; // Optional array of event IDs created by the user
  }