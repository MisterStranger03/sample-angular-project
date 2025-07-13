import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service'; 
import { ProfileService } from '../../service/profile.service'; 

@Component({
  selector: 'app-otp',
  // imports: [],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
  standalone: false 
})
export class OtpComponent implements OnInit {

  constructor(private authService: AuthService,
              private profile: ProfileService 
  ) { }

  otp: string = '';
  email: string = '';
  timer: number = 30; 
  intervalId: any; 
  fake_otp: string = '123456'; 

  ngOnInit() {
    this.email = this.profile.getEmail();
    this.startTimer(); 
  }

  startTimer() {
    this.timer=30; // 30 seconds
    this.intervalId= setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
  resendOtp() {
    console.log('Resending OTP to:', this.email);
    this.startTimer(); 
  }

  handleOtpSubmit() {
   
    console.log('OTP submitted:', this.otp);
    if (this.otp === this.fake_otp) {
      console.log('OTP is valid');
       this.authService.login();
    }
  }
}
