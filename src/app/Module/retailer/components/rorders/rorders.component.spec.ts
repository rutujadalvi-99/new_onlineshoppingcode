import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RordersComponent } from './rorders.component';

describe('RordersComponent', () => {
  let component: RordersComponent;
  let fixture: ComponentFixture<RordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RordersComponent]
    });
    fixture = TestBed.createComponent(RordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
