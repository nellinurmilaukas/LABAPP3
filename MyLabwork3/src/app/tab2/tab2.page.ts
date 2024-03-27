import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
  } 
}