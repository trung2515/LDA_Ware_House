import { Component, Input, OnInit } from '@angular/core';
import Utils from 'src/app/_lib/utils';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-select-date-report',
  templateUrl: './select-date-report.component.html',
  styleUrls: ['./select-date-report.component.css']
})
export class SelectDateReportComponent implements OnInit {
//  @Input('getdata') getdata = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  // startDate: any
  // endDate: any
  // dateFilter: any = {}
  // selectStarDate(e: any) {
  //   this.startDate = Utils.formatDateReport(new Date(e.value))
  //   console.log(this.startDate);

  // }
  // selectEndDate(e: any) {
  //   this.endDate = Utils.formatDateReport(new Date(e.value))
  //   console.log(this.endDate);
 
  // }
}
