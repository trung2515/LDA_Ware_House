import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { TransportInfo } from 'src/app/core/models/model.pb';
import { ReportService } from 'src/app/core/services/report.service';
import Utils from 'src/app/_lib/utils';
import { DataWork, WorkDate, WorkDetail } from './model';
@Component({
  selector: 'app-workflow-management',
  templateUrl: './workflow-management.component.html',
  styleUrls: ['./workflow-management.component.css']
})
export class WorkflowManagementComponent implements OnInit {
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    // this.changeDate(new Date(2021,12,20))
    this.getData();
  }
  now: Date = new Date();
  workDates: WorkDate[] = []
  dataWork: DataWork[] = [];
  workDetail: WorkDetail[] = [];
  singleWorkDetail: any = {}
  dataWorkConvert: any = [];
  dataWorkDetailSelect: WorkDetail;
  isShowPopup:boolean = false
  fromDate:string = [this.now.getFullYear() , this.now.getMonth()+1, this.now.getDate()].join(',')
  toDate:Date = new Date()
  getData() {
    this.reportService
      .reportTransport(this.fromDate, Utils.formatDate(this.toDate))
      .subscribe((data: TransportInfo[]) => {
   
        this.workDetail = data.map(d => new WorkDetail(d));
        this.dataWork = [];
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
        // console.log('work', this.dataWork);
      });
  }
  getDetail(date: string, shift: string) {
    if (shift == null || shift == '') {
      const master = this.dataWork.filter(w => w.date == date).sort((a, b) => a.shift.localeCompare(b.shift))
      // console.log('master', master)
      return master
    } else{
      const detail = this.workDetail.filter(w => w.date == date && w.shift == shift);
      // console.log('detail',detail)
      return detail
    }
  }
  changeFromDate(e:any){
  let d = new Date(e.value)
  // console.log(d);
  let day = ''+d.getDate()
  let month = '' +(d.getMonth()+1)
  let year = d.getFullYear()
  if(day.length < 2){month = '0'+day}
  if(month.length < 2){month = '0'+month}
  this.fromDate = [year , month, day].join(',')
  // console.log(this.fromDate);
  this.getData()
  
}
changeToDate(e:any){
  this.toDate = new Date(e.value)
  this.getData()

}
arrSingleDetail:any[]=[]
showPopup(data:any){
  this.arrSingleDetail=[]
  this.isShowPopup = true;
  this.singleWorkDetail = data
  console.log('sg',this.singleWorkDetail); 
  this.arrSingleDetail.push(this.singleWorkDetail)
}
}
