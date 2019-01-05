import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CreateEventService } from './create-event.service';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  //Regular expression for validationg phone number
  phoneRegex = "^((\\+91-?)|0)?[0-9]{10}$";

  formVar : FormGroup;
  objectEvent : any;
  submitted = false;

  constructor(private fb: FormBuilder, private createService : CreateEventService,
     private userService: UserService) {}

  ngOnInit() {
  
    //Validations : All fields are required and phone number format
    this.formVar = this.fb.group({
      eventName: ['', Validators.required],
      eventDetails: ['', Validators.required],
      eventContact: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      eventVenue: ['', Validators.required],
      eventDate: ['', Validators.required]
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

  this.formVar.value.userId = this.userService.getUserId();

  this.createService.addEvents(this.formVar.value).subscribe(msg => {
    this.formVar.reset();
  });
}
}
