import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOrdersOverTimeComponent } from './chart-orders-over-time.component';

describe('ChartOrdersOverTimeComponent', () => {
  let component: ChartOrdersOverTimeComponent;
  let fixture: ComponentFixture<ChartOrdersOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOrdersOverTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOrdersOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
