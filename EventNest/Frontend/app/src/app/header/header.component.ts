import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  showDropdown: boolean = false; 
  isLoggedIn: boolean = false;
  private loginStatusSubscription: Subscription = new Subscription();

  constructor(public authService: AuthService,private cdRef: ChangeDetectorRef,private router:Router) {


  }





ngOnInit() {
    this.loginStatusSubscription = this.authService.loginStatus$.subscribe(
      status => {
        console.log("here is where we change status");
        this.isLoggedIn = status
        console.log("Received login status in HeaderComponent:", status);
        console.log("Login Status Changed:", status); 
        // Manually trigger change detection
        this.cdRef.detectChanges(); 

      }
      
    );
  }
  ngOnDestroy() {
    this.loginStatusSubscription.unsubscribe();
  }

  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  } 
  

}
