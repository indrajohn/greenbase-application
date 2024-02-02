import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './email-confirmation.component.html',
  styleUrl: './email-confirmation.component.css',
})
export class EmailConfirmationComponent {
  constructor(private router: Router) {}
  goToResendCode(): void {
    // this.router.navigate(['']);
  }
}
