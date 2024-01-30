import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;
  public selectedRows: boolean[] = [];
  jobs: any[] = [];

  constructor(private authservice:AuthenticationService) { }

  ngOnInit() {
    this.authservice.getjobs().subscribe(
        (data) => {
          this.jobs = data;
        },
        (error) => {
          console.error('Error fetching jobs:', error);
        }
    );

  }

}
