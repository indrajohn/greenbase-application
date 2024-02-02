import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCountComponent } from './orders-count.component';

describe('OrdersCountComponent', () => {
  let component: OrdersCountComponent;
  let fixture: ComponentFixture<OrdersCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
