import { Component, OnInit } from '@angular/core';
import { IAlumni } from './IAlumni';
import { Alumni } from './Alumni';
import { homeCalEntries } from '../page-home/homeCalEntries';
import { homeEntries } from '../page-home/homeEntries';
import { iHomeCalEntries } from '../page-home/iHomeCalEntries';
import { iHomepageItems } from '../page-home/iHomepageItems';

@Component({
  selector: 'app-page-alumni',
  templateUrl: './page-alumni.component.html',
  styleUrls: ['./page-alumni.component.scss']
})
export class PageAlumniComponent implements OnInit {
  Alumnis: IAlumni[] = Alumni;
  homeEntries: iHomepageItems[] = homeEntries;
  homeCalEntries: iHomeCalEntries[] = homeCalEntries;

  constructor() {};

  ngOnInit(): void {
    
  }

}
