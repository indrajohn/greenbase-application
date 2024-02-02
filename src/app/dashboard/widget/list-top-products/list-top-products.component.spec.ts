import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopProductsComponent } from './list-top-products.component';

describe('ListTopProductsComponent', () => {
  let component: ListTopProductsComponent;
  let fixture: ComponentFixture<ListTopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTopProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
