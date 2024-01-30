import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    email: '',
    password: '',
  };
  constructor(private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  goTosignupPage() {
    this.router.navigate(['/signup']);
  }
  login(): void {
    this.authService.login(this.userData).subscribe(
        response => {
          console.log('User data:', this.userData);
          console.log(response);
          this.router.navigate(['/condidate/dashboard_condidate']);
            console.log(localStorage.getItem('currentUser'));

            if (this.authService.isAuthenticated()) {
                this.router.navigate(['/condidate/dashboard_condidate']);
            } else {
                console.error('Authentication failed.');
            }


        },
        error => {
          console.error(error);
        }
    );
  }
    isAuthenticated(): boolean {
        return this.authService.isAuthenticated();
    }
}
