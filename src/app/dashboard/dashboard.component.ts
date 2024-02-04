import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { OrdersComponent } from './layout/orders/orders.component';
import { ProductsComponent } from './layout/products/products.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { CustomersComponent } from './layout/customers/customers.component';
import { ReportsComponent } from './layout/reports/reports.component';
import { CouponsComponent } from './layout/coupons/coupons.component';
import { InboxComponent } from './layout/inbox/inbox.component';
import { KnowledgeBaseComponent } from './layout/knowledge-base/knowledge-base.component';
import { ProductUpdatesComponent } from './layout/product-updates/product-updates.component';
import { PersonalSettingsComponent } from './layout/personal-settings/personal-settings.component';
import { GlobalSettingsComponent } from './layout/global-settings/global-settings.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationSidebarComponent,
    RouterOutlet,
    DashboardLayoutComponent,
    OrdersComponent,
    ProductsComponent,
    CategoriesComponent,
    CustomersComponent,
    ReportsComponent,
    CouponsComponent,
    InboxComponent,
    KnowledgeBaseComponent,
    ProductUpdatesComponent,
    PersonalSettingsComponent,
    GlobalSettingsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  menu: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.menu = params.get('menu') || '';
    });
  }
}
