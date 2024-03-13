import { Component, OnInit } from '@angular/core';
import { IAlumni } from '../page-alumni/IAlumni';
import { ActivatedRoute, Params } from '@angular/router';
import { Alumni } from '../page-alumni/Alumni';
import { iHomeCalEntries } from '../page-home/iHomeCalEntries';
import { iHomepageItems } from '../page-home/iHomepageItems';
import { homeEntries } from '../page-home/homeEntries';
import { homeCalEntries } from '../page-home/homeCalEntries';

@Component({
  selector: 'app-alumni-info',
  templateUrl: './alumni-info.component.html',
  styleUrls: ['./alumni-info.component.scss']
})
export class AlumniInfoComponent implements OnInit {

  homeEntries: iHomepageItems[] = homeEntries;
  homeCalEntries: iHomeCalEntries[] = homeCalEntries;

  test: IAlumni = {} as IAlumni;
  id: number= 0

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=> {
      this.id = +param["id"];
      this.test = Alumni[this.id]
    })
  }

}
