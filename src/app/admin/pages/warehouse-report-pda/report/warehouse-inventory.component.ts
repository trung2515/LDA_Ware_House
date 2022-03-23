import { InventoryModel } from '../model';
import { ReportService } from 'src/app/core/services/report.service';
import { Component, OnInit } from '@angular/core';
@Component(
  {
    selector: 'warehouse-inventory',
    templateUrl: './warehouse-inventory.component.html',
    styleUrls: ['./warehouse-inventory.component.css']
  }
)
export class WareHouseInventoryComponent implements OnInit {

  public data: InventoryModel[] = []
  public startDate: Date = new Date()
  public endDate: Date = new Date()
  public title_nav: string = 'Ton kho'
  constructor(private reportService: ReportService) {

  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.reportService.reportWarehouse().subscribe(data => this.data = data.map(d => new InventoryModel(d)))
  }

}
