import { ReportService } from 'src/app/core/services/report.service';
import { QtyOnBaggingMachine, FilterModel, QtyAlumin50KG } from './models';
import { Component, OnInit } from '@angular/core';
import { getDates } from 'src/app/utils/helper';
import { ExcelService } from 'src/app/core/services/excel.service';
import Utils from 'src/app/_lib/utils';
@Component({
  selector: 'app-warehouse-report',
  templateUrl: './warehouse-report.component.html',
  styleUrls: ['./warehouse-report.component.css']
})
export class WarehouseReportComponent implements OnInit {
  title_nav = 'Báo cáo sản lượng đóng bao';
  startDate: Date = new Date();
  endDate: Date = new Date();
  qtyOnBaggingMachines: QtyOnBaggingMachine[] = [];
  qtyAlumin50: QtyAlumin50KG[] = []

  filterControl: FilterModel = {
    objDate: {
      startDate: 0,
      endDate: 0
    },
    inputValue: ''
  };
  tabInfo: any


  disabledDates: Date[] = [];
  constructor(
    private excelService: ExcelService,
    private reportService: ReportService
  ) {
    this.tabInfo = [
      {
        id: 1,
        tabName: 'Báo cáo sản lượng đóng bao 1 tấn',
      },
      {
        id: 2,
        tabName: 'Báo cáo sản lượng đóng bao 50kg',
      },
    ]
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.reportService.report50kg(Utils.formatDate(this.startDate), Utils.formatDate(this.endDate)).subscribe(data => {
      this.qtyAlumin50 = data.map(d => new QtyAlumin50KG(d))
    })

    this.reportService.reportOnMachineBag(Utils.formatDate(this.startDate), Utils.formatDate(this.endDate)).subscribe(data => {
      this.qtyOnBaggingMachines = data.map(d => new QtyOnBaggingMachine(d))
    })
  }


  // handle dx-date-box change event
  getStartDate(e: any) {
    this.startDate = e;
    // if (this.startDate) {
    //   this.disabledDates = this.getDisabledDates(this.startDate);
    // }
    if(this.startDate <= this.endDate){
      this.getData()
    }
  }
  getEndDate(e: any) {
    this.endDate = e;
    // const endDate = this.endDate.getTime();
    // const startDate = this.startDate.getTime();
    // this.filterControl.objDate = {
    //   startDate,
    //   endDate
    // };
    if(this.startDate <= this.endDate){
      this.getData()
    }

  }
  getDisabledDates(stopDate: Date) {
    return getDates(stopDate);
  }

  onExportingGrid(e: any) {
    this.excelService.onExportingExcelGrid(e, 'warehouse-report');
  }

}
