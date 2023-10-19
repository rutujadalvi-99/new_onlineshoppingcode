import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercartComponent } from './ordercart.component';

describe('OrdercartComponent', () => {
  let component: OrdercartComponent;
  let fixture: ComponentFixture<OrdercartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
