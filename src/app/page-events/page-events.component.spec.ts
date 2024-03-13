import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventsComponent } from './page-events.component';

describe('PageEventsComponent', () => {
  let component: PageEventsComponent;
  let fixture: ComponentFixture<PageEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEventsComponent]
    });
    fixture = TestBed.createComponent(PageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
