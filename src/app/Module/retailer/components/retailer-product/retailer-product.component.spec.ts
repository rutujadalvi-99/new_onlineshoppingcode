import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerProductComponent } from './retailer-product.component';

describe('RetailerProductComponent', () => {
  let component: RetailerProductComponent;
  let fixture: ComponentFixture<RetailerProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerProductComponent]
    });
    fixture = TestBed.createComponent(RetailerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
