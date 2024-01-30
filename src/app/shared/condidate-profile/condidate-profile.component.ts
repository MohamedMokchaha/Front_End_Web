import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-condidate-profile',
  templateUrl: './condidate-profile.component.html',
  styleUrls: ['./condidate-profile.component.css']
})
export class CondidateProfileComponent implements OnInit {
  updatedUserData = {
    id: '656387db63b8d819d771a486',
    username: '',
    email: '',
    isAdmin: false,
    isAgent: false,
    skills: ['flutter','kotlin','ruby'],
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  updateUser() {
    const apiUrl = 'https://scientific-even-krypton.glitch.me/api/users';
    const userId = '65693f9ac9b6b86e46b29587';

    const updateData = {
      id: userId,
      username: 'Iheb Gar4a144',
      isAdmin: false,
      isAgent: false,
      skills: ['Node JS', 'Java', 'Flutter'],
      profile: 'https://d326fntlu7tb1e.cloudfront.net/uploads/4821d814-ac87-4b22-aa80-ac7336916c9a-403017_avatar_default_head_person_unknown_icon.png'
    };

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjM4N2RiNjNiOGQ4MTlkNzcxYTQ4NiIsImlzQWRtaW4iOmZhbHNlLCJpc0FnZW50IjpmYWxzZSwiaWF0IjoxNzAxMzg5MDM4LCJleHAiOjE3MDMyMDM0Mzh9.eOJEMuQKIFcQybu0371-9LM0Ufjj8ttJJHNSO7brjMA';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log('Request Headers:', headers);

    this.http.put(apiUrl, updateData, { headers })
        .subscribe(response => {
          console.log('User updated successfully:', response);
        }, error => {
          console.error('Error updating user:', error);
        });
  }

}
