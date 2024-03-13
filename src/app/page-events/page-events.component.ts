import { Component, OnInit } from '@angular/core';
import { IEvents } from './IEvents';
import { events } from './events';

@Component({
  selector: 'app-page-events',
  templateUrl: './page-events.component.html',
  styleUrls: ['./page-events.component.scss']
})
export class PageEventsComponent implements OnInit {

  events: IEvents[] = events;

  constructor() {};

  eventDetailsClick(item: IEvents) {
    // console.log(item.description);
    if (item.clicked == false) {
      item.clicked = true;
    } else if (item.clicked == true) {
      item.clicked = false;
    }
    return item.description;
  }

  ngOnInit(): void {
    
  }

}
