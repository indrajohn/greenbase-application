import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private router: Router) {}
  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
