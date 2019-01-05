import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HomeService } from '../home/home.service';
import { EditEventComponent } from '../edit-event/edit-event.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  eventsList;

  @Input() editEventComponent : EditEventComponent;
  constructor( private router: Router,
    private userService: UserService,
    private homeService: HomeService) { }

  ngOnInit() {
    this.userDetails = {
      'firstName' : '',
      'username' : ''

    };
    this.userService.getUserProfile().subscribe(
      res => {
        console.log(res['user.firstName']);
        this.userDetails = res['user']; // User Details
      },
      err => {
                console.log(err);
      }
    );

    this.userService.getEventForUser(this.userService.getUserId()).subscribe((event) => {
      this.eventsList = event; //Event list of logged in user 
    });
  }

  deleteEvent(event) {
    if(confirm("Do you want to delete this Event?")){
      this.userService.deleteEvent(event._id).subscribe(updateEvents => {
        this.userService.getEventForUser(this.userService.getUserId()).subscribe((event) => {
          this.eventsList = event; //Event list of logged in user 
        });
      });
    }
    
  }

  editEvent(event) {

         let navigationExtras: NavigationExtras = {
           queryParams: {
             "eventId" : event._id,
            "eventName": event.title,
            "eventDetails": event.details,
            "eventContact": event.contact,
            "eventVenue": event.address,
            "eventDate": event.date
            }
           }
           this.router.navigate(['edit'], navigationExtras );
         } ;
}
