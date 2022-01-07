import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';

import { TransportInfo } from 'src/app/core/models/model.pb';
import { ReportService } from 'src/app/core/services/report.service';
import Utils from 'src/app/_lib/utils';
import { DataWork, SingleDetailWork, WorkDate, WorkDetail } from './model';
@Component({
  selector: 'app-workflow-management',
  templateUrl: './workflow-management.component.html',
  styleUrls: ['./workflow-management.component.css']
})
export class WorkflowManagementComponent implements OnInit {
  constructor(private reportService: ReportService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.changeDate(new Date(2021,12,20))
    this.fromDate = new Date(this.now.getFullYear(), this.now.getMonth() - 1, this.now.getDate())
    this.getData();
  }
  now: Date = new Date();
  workDates: WorkDate[] = []
  dataWork: DataWork[] = [];
  workDetail: WorkDetail[] = [];
  singleWorkDetail: DataWork
  dataWorkConvert: any = [];
  dataWorkDetailSelect: WorkDetail;
  arrSingleWorkDetail: DataWork[] = [];
  isShowPopup: boolean = false
  fromDate: Date
  toDate: Date = new Date()
  getData() {

    this.reportService
      .reportTransport(Utils.formatDate(this.fromDate), Utils.formatDate(this.toDate))
      .subscribe((data: TransportInfo[]) => {
        this.workDetail = data.map(d => new WorkDetail(d));
        this.dataWork = [];
        this.workDates = [];
        for (var i = 0; i < data.length; i++) {
          let work = new DataWork(data[i]);
          let workDate = new WorkDate(data[i])

          if (this.workDates.filter(d => d.date == work.date).length == 0) {
            this.workDates.push(workDate);
          }
          if (this.dataWork.filter(d => d.date == work.date && d.shift == work.shift).length == 0) {
            this.dataWork.push(work);
          }
        }

        console.log(data);
      });
      
  }
  getDetail(date: string, shift: string) {
    if (shift == null || shift == '') {
      const master = this.dataWork.filter(w => w.date == date).sort((a, b) => a.shift.localeCompare(b.shift))
      return master
    } else {
      const detail = this.workDetail.filter(w => w.date == date && w.shift == shift);
      // console.log(detail)
      return detail
    }
  }
  changeFromDate(e: any) {
    this.fromDate = e.value
    if (this.fromDate <= this.toDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }

  }
  changeToDate(e: any) {
    this.toDate = e.value
    if (this.fromDate <= this.toDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }

  }
  sumQuantity:number
  sumWeight:number
  showPopup(data: any) {
    this.isShowPopup = true;
    this.arrSingleWorkDetail = this.dataWork.filter(w => w.code == data.code)
    this.sumQuantity = 0
    this.sumWeight = 0
    for(var i = 0; i < this.arrSingleWorkDetail.length; i++){
      this.sumQuantity += this.arrSingleWorkDetail[i].quantity
      this.sumWeight += (this.arrSingleWorkDetail[i].quantity * this.arrSingleWorkDetail[i].weight)
    }
   
    this.singleWorkDetail = this.arrSingleWorkDetail[0]
    console.log('single',this.singleWorkDetail);
    

  }
  closePop() {
    this.isShowPopup = false;
  }
  // getDataDetailWork(res:any) {
  //   if (res.codeWork == 'VCLK' || res.codeWork.includes('N')) {
  //     this.reportService.reportTransportByCodeIn(res.code).subscribe((data) => {
  //       this.arrSingleWorkDetail = data.map((d) => new SingleDetailWork(d))
  //       // console.log('vclk',this.arrSingleWorkDetail)
  //     })
  //   } else {
  //     this.reportService.reportTransportByCodeOut(res.code).subscribe((data) => {
  //       this.arrSingleWorkDetail = data.map((d) => new SingleDetailWork(d))
  //       // console.log('xtt',this.arrSingleWorkDetail)
  //     })
  //   }
  // }

}
