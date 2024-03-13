import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAlumniComponent } from './page-alumni/page-alumni.component';
import { PageStoriesComponent } from './page-stories/page-stories.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { PageCareersComponent } from './page-careers/page-careers.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumniInfoComponent } from './alumni-info/alumni-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageHomeComponent,
    PageAlumniComponent,
    PageStoriesComponent,
    PageEventsComponent,
    PageCareersComponent,
    PageContactComponent,
    AlumniInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
