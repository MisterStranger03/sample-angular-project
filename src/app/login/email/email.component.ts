import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service'; 
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  standalone: false 
})
export class EmailComponent {

  constructor(private authService: AuthService, 
              private profile: ProfileService
  ) { }

  email: string = '';
  handleLogin() {
    // console.log('Email submitted:', this.email);
    this.authService.signup();
    this.profile.setEmail(this.email);
  }
}