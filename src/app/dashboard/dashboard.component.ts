import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, NavigationSidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  selectedMenuItem: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedMenuItem = params.get('menu') || '';
      console.log(this.selectedMenuItem);
    });
  }
}
