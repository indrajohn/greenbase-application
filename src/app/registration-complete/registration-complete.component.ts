import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-complete',
  standalone: true,
  imports: [],
  templateUrl: './registration-complete.component.html',
  styleUrl: './registration-complete.component.css',
})
export class RegistrationCompleteComponent {
  constructor(private router: Router) {}
  goToResendCode(): void {
    // this.router.navigate(['']);
  }

  goToResendConfirmation(): void {
    this.router.navigate(['/registration-complete']);
  }
}
