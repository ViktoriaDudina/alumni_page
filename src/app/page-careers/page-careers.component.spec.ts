import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCareersComponent } from './page-careers.component';

describe('PageCareersComponent', () => {
  let component: PageCareersComponent;
  let fixture: ComponentFixture<PageCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCareersComponent]
    });
    fixture = TestBed.createComponent(PageCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
