import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-sidebar.component.html',
  styleUrl: './navigation-sidebar.component.css',
})
export class NavigationSidebarComponent {
  activeLink: string = 'dashboard';

  constructor(private router: Router) {
    this.activeLink = this.router.url;
  }
}
