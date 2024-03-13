import { Component, OnInit } from '@angular/core';
import { iHomepageItems } from './iHomepageItems';
import { homeEntries } from './homeEntries';
import { iHomeCalEntries } from './iHomeCalEntries';
import { homeCalEntries } from './homeCalEntries';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  homeEntries: iHomepageItems[] = homeEntries;
  homeCalEntries: iHomeCalEntries[] = homeCalEntries;

  constructor() {}

  ngOnInit(): void {}
}
