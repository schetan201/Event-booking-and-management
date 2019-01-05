import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeService } from './home/home.service';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { NavbComponent } from './navb/navb.component';
import { CreateEventComponent } from './create-event/create-event.component';
 import { CreateEventService } from './create-event/create-event.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { EditEventComponent } from './edit-event/edit-event.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { EventBookingComponent } from './event-booking/event-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    CreateEventComponent,
    HomeComponent,
    EditEventComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    EventBookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService, CreateEventService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
