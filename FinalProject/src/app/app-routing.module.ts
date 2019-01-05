import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { EventBookingComponent} from './event-booking/event-booking.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [

  {path: 'event', component: EventBookingComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateEventComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditEventComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateEventComponent , HomeComponent , EventBookingComponent, EditEventComponent ]
