import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {}
  goToRegistrationComplete(): void {
    this.router.navigate(['/registration-complete']);
  }
}
