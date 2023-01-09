import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-report-lot',
  templateUrl: './report-lot.component.html',
  styleUrls: ['./report-lot.component.css']
})
export class ReportLotComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
    this.getdata()
    
  }
  dataLot:any =[]
  pUser:number =1
  pArea:number =1
  p:number = 1
  getdata(){
    this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/thongtinlo').subscribe(
      (data:any) => {
        this.dataLot = data.data
        console.log(this.dataLot);
        
      }
      )
  }
  getImg(){
    this.apiService.get('https://office.stvg.vn:50302/StvgFile/image?code=746573747c363337383531393732373639313034303833').subscribe(
      (data:any) => {
        console.log(data);
        
      }
    )
  }
}
