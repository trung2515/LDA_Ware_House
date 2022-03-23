import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-report-order',
  templateUrl: './report-order.component.html',
  styleUrls: ['./report-order.component.css']
})
export class ReportOrderComponent implements OnInit {

  constructor(private apiService : NewReportService) { }

  ngOnInit(): void {
    this.getData()
  }
  dataOrder:any
  pUser:number =1
  pArea:number =1
  getData(){
    this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/trangthaidonhang').subscribe(
      (data:any) => this.dataOrder =data.data
    )
  }
}
