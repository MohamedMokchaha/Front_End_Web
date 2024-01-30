import { Component } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {

  jobTitle: string = '';
  requiredSkills: string = '';
  closingDate: string = '';
  jobType: string = '';
  jobBenefits: string = '';
  experienceLevel: string = '';

  onSubmit() {
    // Log the values to the console
    console.log('Job Title:', this.jobTitle);
    console.log('Experience Level:', this.experienceLevel);
    console.log('Required Skills:', this.requiredSkills);
    console.log('Closing Date:', this.closingDate);
    console.log('Job Type:', this.jobType);
    console.log('Job Benefits:', this.jobBenefits);
  }
}
