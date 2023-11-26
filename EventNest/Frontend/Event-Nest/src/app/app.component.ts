import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FeaturedEventsComponent } from "./featured-events/featured-events.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, WelcomeComponent, FooterComponent, BreadcrumbsComponent, FeaturedEventsComponent]
})
export class AppComponent {
  title = 'Event-Nest';
}
