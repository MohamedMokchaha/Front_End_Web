import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-sign-up-conditateur',
  templateUrl: './sign-up-conditateur.component.html',
  styleUrls: ['./sign-up-conditateur.component.css']
})
export class SignUpConditateurComponent implements OnInit {
  userData = {
    username: 'Ihebff Gara',
    email: 'ltry1792@gmail.com',
    password: 'iheb123',
  };
  constructor(private router: Router,private http: HttpClient,
              private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  signUp() {
    this.authenticationservice.signUp(this.userData)
        .subscribe(
            response => {
              console.log('User data:', this.userData);
              console.log(response);
            },
            error => {
              console.error(error);
            }
        );
  }
}
