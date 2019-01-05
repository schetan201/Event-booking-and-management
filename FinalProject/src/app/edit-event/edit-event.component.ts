import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EditEventService } from './edit-event.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  //Regular expression for validationg phone number
  phoneRegex = "^((\\+91-?)|0)?[0-9]{10}$";

  formVar : FormGroup;
  objectEvent : any;
  id : '';
  submitted = false;

  //event object creation
  eventObj = {

    eventId : '',
    eventName: '',
    eventDetails: '',
    eventContact: '',
    eventVenue: '',
    eventDate: ''
};

  constructor(private fb: FormBuilder, private editService : EditEventService, private router : ActivatedRoute) {
    
    console.log("In constructor" + this.eventObj.eventDate + "Here");
  
    //Pulling previous details to be updated
this.router.queryParams.subscribe(params => {
this.eventObj.eventId = params["eventId"];
this.eventObj.eventName = params["eventName"];
this.eventObj.eventDetails = params["eventDetails"];
this.eventObj.eventContact = params["eventContact"];
this.eventObj.eventVenue = params["eventVenue"];
this.eventObj.eventDate = params["eventDate"];

    });

  }

  ngOnInit() {
  
    //Validations : All fields are required and phone number format

    this.formVar = this.fb.group({
      eventId : this.eventObj.eventId,
      eventName: [this.eventObj.eventName, Validators.required],
      eventDetails: [this.eventObj.eventDetails, Validators.required],
      eventContact: [this.eventObj.eventContact, [Validators.required, Validators.pattern(this.phoneRegex)]],
      eventVenue: [this.eventObj.eventVenue, Validators.required],
      eventDate: [this.eventObj.eventDate, Validators.required]
  });

  }

//Function to be used on the html for catching errors
  get f() { return this.formVar.controls; }

onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.formVar.invalid) {
      return;
  }
 
  this.editService.editEvents(this.formVar.value).subscribe(msg => {
    this.formVar.reset();
  });
}
}
