// tables.component.ts

import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public selectedRows: boolean[] = [];

    constructor() { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'Contact'],
            dataRows: [
                ['1', 'Sawssen Kaabi', 'Tunis', '20 486 373'],
                ['2', 'Iheb khlifi', 'Tunis', '35 353 273'],
                ['3', 'Sage Rodriguez', 'Netherlands', '63 363 272'],
                ['4', 'Ahmed Mohssen', 'Tunis, South', '64 337 833'],
                ['5', 'Doris Greene', 'Malawi', '42 373 283'],
                ['6', 'Mason Porter', 'Chile', '21 338 383']
            ]
        };
    }

    acceptCandidates() {
        const acceptedCandidates = this.getSelectedCandidates();
        console.log('Candidats acceptés :', acceptedCandidates);
    }

    rejectCandidates() {
        const rejectedCandidates = this.getSelectedCandidates();
        console.log('Candidats refusés :', rejectedCandidates);
    }

    getSelectedCandidates(): string[][] {
        return this.tableData1.dataRows.filter((row, i) => this.selectedRows[i]);
    }
}
