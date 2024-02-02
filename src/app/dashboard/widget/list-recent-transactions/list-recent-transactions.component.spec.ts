import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecentTransactionsComponent } from './list-recent-transactions.component';

describe('ListRecentTransactionsComponent', () => {
  let component: ListRecentTransactionsComponent;
  let fixture: ComponentFixture<ListRecentTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRecentTransactionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
