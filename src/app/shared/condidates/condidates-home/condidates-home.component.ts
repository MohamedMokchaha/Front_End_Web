import { Component, OnInit } from '@angular/core';
import {ChartType, LegendItem} from "../../../lbd/lbd-chart/lbd-chart.component";
import * as Chartist from "chartist";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-condidates-home',
  templateUrl: './condidates-home.component.html',
  styleUrls: ['./condidates-home.component.css']
})
export class CondidatesHomeComponent implements OnInit {

  cards: any[] = [
    // Your card data here
    // Example:
    {
      title: 'techcorp',
      subtitle: 'Software developer',
      image: 'https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1080,q_auto',
      content: 'We are looking for a talented software engineer to join our team',
    },
    {
      title: 'tekup',
      subtitle: 'Mobile developer',
      image: 'https://mobileappdevelopment.dev/images/MobileAppDevelopmentServiceAreas.png',
      content: 'We are looking for a talented software engineer to join our team',
    },
    // Add more cards as needed
  ];

  filteredCards: any[] = [];
  searchTerm: string = '';
  jobs: any[] = [];

  constructor(private router:Router,
              private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.filteredCards = [...this.cards];
    this.filterCards();
    this.authService.getjobs().subscribe(
        (data) => {
          this.jobs = data;
          this.filteredCards = this.transformJobsToCards(data);
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
    );


  }
  filterCards() {
    this.filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  navigateToApplyPage() {
    this.router.navigate(['/condidate/apply']);
  }
  transformJobsToCards(jobs: any[]): any[] {
    return jobs.map((job) => ({
      title: job.company,
      subtitle: job.title,
      location: job.location,
      salary: job.salary,
      image: job.imageUrl,
      content: job.description,
      period: job.period
    }));
  }


  getCurrentUser(): any {
    return this.authService.getCurrentUser();
  }
  showDetails(card: any): void {
    // Implement the logic to show details, e.g., navigate to a details page
    console.log('Show details for:', card);
  }
}
