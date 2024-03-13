import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAlumniComponent } from './page-alumni/page-alumni.component';
import { PageCareersComponent } from './page-careers/page-careers.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { PageStoriesComponent } from './page-stories/page-stories.component';
import { AlumniInfoComponent } from './alumni-info/alumni-info.component';

const routes: Routes = [
  {
    path: "", component: PageHomeComponent
  },{
    path: "alumni", component: PageAlumniComponent
  },{
    path: "careers", component: PageCareersComponent
  },{
    path: "contact", component: PageContactComponent
  },{
    path: "events", component: PageEventsComponent
  },{
    path: "stories", component: PageStoriesComponent
  },{
    path: "alumni/:id", component: AlumniInfoComponent
  },{
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
