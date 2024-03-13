import { Component, OnInit } from '@angular/core';
import { alumni } from 'src/alumni-stories';
import { ialumni } from 'src/ialumni-stories';
import { iHomepageItems } from '../page-home/iHomepageItems';
import { homeEntries } from '../page-home/homeEntries';
import { iHomeCalEntries } from '../page-home/iHomeCalEntries';
import { homeCalEntries } from '../page-home/homeCalEntries';

@Component({
  selector: 'app-page-stories',
  templateUrl: './page-stories.component.html',
  styleUrls: ['./page-stories.component.scss']
})
export class PageStoriesComponent implements OnInit {
  alumniArr: ialumni[] = alumni;
  homeEntries: iHomepageItems[] = homeEntries;
  homeCalEntries: iHomeCalEntries[] = homeCalEntries;

  constructor() {}

  ngOnInit(): void {
    
  }
}
