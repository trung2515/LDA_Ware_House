import { WarehouseReportService } from './warehouse-report.service';
import { QtyOnBaggingMachine, FilterModel, QtyAlumin50KG } from './models';
import { Component, OnInit } from '@angular/core';
import { getDates } from 'src/app/utils/helper';
import { ExcelService } from 'src/app/core/services/excel.service';
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
  qtyAlumin50:  QtyAlumin50KG[] = []
  qtyOnBaggingMachines_copy: QtyOnBaggingMachine[] = [];

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
    private warehouseReportService: WarehouseReportService
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

  getData(){
    this.qtyOnBaggingMachines = this.warehouseReportService.getQtyOnBaggingMachine();
    this.qtyAlumin50 = this.warehouseReportService.getReport50Kg();
  }


  // handle dx-date-box change event
  getStartDate(e: any) {
    this.startDate = e.value;
    if (this.startDate) {
      this.disabledDates = this.getDisabledDates(this.startDate);
    }
  }
  getEndDate(e: any) {
    this.endDate = e.value;
    const endDate = this.endDate.getTime();
    const startDate = this.startDate.getTime();
    this.filterControl.objDate = {
      startDate,
      endDate
    };
  }
  getDisabledDates(stopDate: Date) {
    return getDates(stopDate);
  }

  onExportingGrid(e: any) {
    this.excelService.onExportingExcelGrid(e, 'warehouse-report');
  }

}
