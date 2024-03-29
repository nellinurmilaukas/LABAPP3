import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout(); // Call the logout method from AuthService
  } 
}
