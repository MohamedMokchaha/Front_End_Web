import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  private apiUrl = 'https://jobhubrest-main2-production.up.railway.app/api/application';

  constructor(private http: HttpClient) {}

  applyForJob(jobId: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    const body = {
      job: jobId,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

