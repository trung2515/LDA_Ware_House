import { Component, OnInit } from '@angular/core';
import { NewReportService } from 'src/app/core/services/report-service.service';

@Component({
  selector: 'app-report-inventory',
  templateUrl: './report-inventory.component.html',
  styleUrls: ['./report-inventory.component.css']
})
export class ReportInventoryComponent implements OnInit {

  constructor(private apiService:NewReportService) { }

  ngOnInit(): void {
    this.getdata()
  }
  dataIventory:any = []
  getdata(){
    this.apiService.get('http://office.stvg.vn:51008/api/WareHouseLDA/thongtinkho').subscribe(
      (data:any) => {
        let item:any ={}
        this.dataIventory = data.data
      }
      )
  }

}
