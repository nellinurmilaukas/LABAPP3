import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  public username = new BehaviorSubject<string>('');

  constructor() { }

  login(username: string) {
    this.loggedIn.next(true);
    this.username.next(username);
  }

  logout() {
    this.loggedIn.next(false);
    this.username.next('');
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getUsername() {
    return this.username.asObservable();
  }
}
