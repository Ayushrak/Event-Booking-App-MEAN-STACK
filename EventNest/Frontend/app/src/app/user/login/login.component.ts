import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: string = '';
  
  user: User = { Username: '', email: '', password: '', rsvp: [] };


  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      response => {
          this.router.navigate(['/']);
      },

      error => {
        console.error('Registration error:', error);
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    );
    }

}
