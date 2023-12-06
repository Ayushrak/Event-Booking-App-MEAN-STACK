import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeaturedEventsComponent } from './featured-events/featured-events.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterNavBarComponent } from './filter-nav-bar/filter-nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    WelcomeComponent,
    FeaturedEventsComponent,
    HomeComponent,
    LayoutComponent,
    FilterNavBarComponent,
    CreateEventComponent
  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
