import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  AuthUser: User = {
    Username: '',
    email: '',
    password: '',
    rsvp: []
  };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.AuthUser).subscribe(
      response => {
        console.log(this.AuthUser);
        // Navigate to login page on successful registration
        this.router.navigate(['/login']);
      },
      error => {
        // Handle registration error
        console.error('Registration error:', error);
      }
    );
 }
}
