import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { EventBookingService } from './event-booking.service';
import { ActivatedRoute } from '@angular/router';
//import { HomeService } from '..home.service';


@Component({
  selector: 'app-edit-event',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss']
})
export class EventBookingComponent implements OnInit {

  formVar : FormGroup;
  objectEvent : any;
  id : '';

  eventObj = {

    eventId : '',
    eventName: '',
    eventDetails: '',
    eventContact: '',
    eventVenue: '',
    eventDate: '',
    username: ''
};

  constructor(private fb: FormBuilder, private eventBookingService : EventBookingService, private router : ActivatedRoute) {

    this.router.queryParams.subscribe(params => {
this.eventObj.eventId = params["eventId"];
this.eventObj.eventName = params["eventName"];
this.eventObj.eventDetails = params["eventDetails"];
this.eventObj.eventContact = params["eventContact"];
this.eventObj.eventVenue = params["eventVenue"];
this.eventObj.eventDate = params["eventDate"];
this.eventObj.username = params["username"];
    });

  }


  ngOnInit() {
  }

onSubmit() {

  if(confirm('Confirm Ticket Booking?')){
    this.eventBookingService.bookEvent(this.eventObj).subscribe(msg => {
      alert('Your Ticket has been Booked successfully! Look for our mail!')
    });
  }
  
}
}
