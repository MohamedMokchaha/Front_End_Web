import { Component, OnInit } from '@angular/core';
import {JobApplicationService} from "../services/job-application.service";

@Component({
  selector: 'app-apply-forum',
  templateUrl: './apply-forum.component.html',
  styleUrls: ['./apply-forum.component.css']
})
export class ApplyForumComponent implements OnInit {

  constructor(private jobApplicationService:JobApplicationService) { }

  ngOnInit(): void {
  }
  applyForJob() {
    const jobId = '654d7af0be28d90efdae80bf'; // Replace with your job ID
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWU5MzhmNGFjYjVjMDFhYWQ5NzdkMyIsImlzQWRtaW4iOmZhbHNlLCJpc0FnZW50IjpmYWxzZSwiaWF0IjoxNzAxNDcxMjk1LCJleHAiOjE3MDMyODU2OTV9.H9AGMOna09JXpTvOeXMtSu9SlMWZ-2fKxHqrgLEoLQM'; // Replace with your actual token

    this.jobApplicationService.applyForJob(jobId, token).subscribe(
        (response) => {
          console.log('Application successful!', response);
        },
        (error) => {
          console.error('Error applying for the job', error);
        }
    );
  }

}
