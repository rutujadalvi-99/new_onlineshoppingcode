import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerdeleteComponent } from './retailerdelete.component';

describe('RetailerdeleteComponent', () => {
  let component: RetailerdeleteComponent;
  let fixture: ComponentFixture<RetailerdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerdeleteComponent]
    });
    fixture = TestBed.createComponent(RetailerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
