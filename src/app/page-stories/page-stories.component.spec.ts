import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStoriesComponent } from './page-stories.component';

describe('PageStoriesComponent', () => {
  let component: PageStoriesComponent;
  let fixture: ComponentFixture<PageStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStoriesComponent]
    });
    fixture = TestBed.createComponent(PageStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
