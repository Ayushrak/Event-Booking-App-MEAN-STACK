import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent,data: { breadcrumb: 'Home' }  },
      { path: 'create-event', component: CreateEventComponent,  canActivate: [AuthGuardService]},
    ]
  },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
