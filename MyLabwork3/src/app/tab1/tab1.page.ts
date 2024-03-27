import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
  } 
}
