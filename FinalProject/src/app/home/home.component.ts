import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



eventsList;
  constructor(private homeService: HomeService,
    private router: Router) { }
eventObj;
id;
  ngOnInit() {
    console.log('ngoninit');
    this.homeService.getEvents().subscribe((events) => {
      this.eventsList = events;
    });
  }

  
  openConfirmationDialog(event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        "eventId" : event._id,
        "eventName": event.title,
        "eventDetails": event.details,
        "eventContact": event.contact,
        "eventVenue": event.address,
        "eventDate": event.date,
        "username": localStorage.getItem('username')
      }
    };
    this.router.navigate(['event'], navigationExtras);
  }
  }


