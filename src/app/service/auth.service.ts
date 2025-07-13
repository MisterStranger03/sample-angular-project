import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private otp: string = "123456";
  private otporiginal: string = "";
  constructor(private router: Router) { }

  get isLoggedIn$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isAuthenticated(): boolean {
    return this.loggedIn.getValue();
  }

  signup() {
    this.loggedIn.next(true);
    this.router.navigate(['/login/otp']);
  }
  login() {
    this.router.navigate(['/dashboard']); 
    
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}