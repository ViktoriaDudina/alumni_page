import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniInfoComponent } from './alumni-info.component';

describe('AlumniInfoComponent', () => {
  let component: AlumniInfoComponent;
  let fixture: ComponentFixture<AlumniInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniInfoComponent]
    });
    fixture = TestBed.createComponent(AlumniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
