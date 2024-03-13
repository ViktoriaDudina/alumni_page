import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlumniComponent } from './page-alumni.component';

describe('PageAlumniComponent', () => {
  let component: PageAlumniComponent;
  let fixture: ComponentFixture<PageAlumniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAlumniComponent]
    });
    fixture = TestBed.createComponent(PageAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
