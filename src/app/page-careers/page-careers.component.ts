import { Component, OnInit } from '@angular/core';
import { ICareers } from './ICareers';
import { careers } from './carrers';
import { iHomepageItems } from '../page-home/iHomepageItems';
import { homeEntries } from '../page-home/homeEntries';
import { iHomeCalEntries } from '../page-home/iHomeCalEntries';
import { homeCalEntries } from '../page-home/homeCalEntries';

@Component({
  selector: 'app-page-careers',
  templateUrl: './page-careers.component.html',
  styleUrls: ['./page-careers.component.scss']
})
export class PageCareersComponent implements OnInit {
  careerArr: ICareers[] = careers;
  homeEntries: iHomepageItems[] = homeEntries;
  homeCalEntries: iHomeCalEntries[] = homeCalEntries;

  constructor() {}

  ngOnInit(): void {
    
  }
}
