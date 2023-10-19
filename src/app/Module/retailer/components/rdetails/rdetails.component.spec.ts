import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdetailsComponent } from './rdetails.component';

describe('RdetailsComponent', () => {
  let component: RdetailsComponent;
  let fixture: ComponentFixture<RdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdetailsComponent]
    });
    fixture = TestBed.createComponent(RdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
