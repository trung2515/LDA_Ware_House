import { WarehouseReportService } from './warehouse-report.service';
import { QtyOnBaggingMachine, FilterModel } from './models';
import { Component, OnInit } from '@angular/core';
import { getDates } from 'src/app/utils/helper';
import { ExcelService } from 'src/app/core/services/excel.service';
@Component({
  selector: 'app-warehouse-report',
  templateUrl: './warehouse-report.component.html',
  styleUrls: ['./warehouse-report.component.css']
})
export class WarehouseReportComponent implements OnInit {
  title_nav = 'Báo cáo số lượng trên máy đóng bao';
  startDate: Date = new Date();
  endDate: Date = new Date();
  qtyOnBaggingMachines: QtyOnBaggingMachine[] = [];
  qtyOnBaggingMachines_copy: QtyOnBaggingMachine[] = [];

  filterControl: FilterModel = {
    objDate: {
      startDate: 0,
      endDate: 0
    },
    inputValue: ''
  };




  disabledDates: Date[] = [];
  constructor(
    private excelService: ExcelService,
    warehouseReportService: WarehouseReportService
  ) {
    this.getEndDate = this.getEndDate.bind(this);
    this.getStartDate = this.getStartDate.bind(this);
    this.qtyOnBaggingMachines = warehouseReportService.getQtyOnBaggingMachine();

  }

  ngOnInit(): void {
    this.disabledDates = this.getDisabledDates(this.startDate);
    this.qtyOnBaggingMachines_copy = [...this.qtyOnBaggingMachines];
  }
  handleFilter = () => {
    const { objDate, inputValue } = this.filterControl;
    // filter only date
    if (objDate.endDate && !inputValue) {
      if (this.endDate >= this.startDate) {
        const result = this.qtyOnBaggingMachines.filter((item: any) => {
          const dateOfItem = item.date.getTime();
          return (
            dateOfItem >= objDate.startDate && dateOfItem <= objDate.endDate
          );
        });
        this.qtyOnBaggingMachines_copy = result;
      }
    }
    // filter only product name
    else if (inputValue && !objDate.endDate) {
      this.qtyOnBaggingMachines_copy = this.qtyOnBaggingMachines.filter(
        product => {
          return (
            product.product_name
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          );
        }
      );
    }
    // filter with both conditions
    else {
      const result = this.qtyOnBaggingMachines.filter((product: any) => {
        const dateOfItem = product.date.getTime();
        return (
          dateOfItem >= objDate.startDate &&
          dateOfItem <= objDate.endDate &&
          product.product_name
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        );
      });
      this.qtyOnBaggingMachines_copy = result;
    }
  };
  filterWithProductName({ value, keyCode }: any) {
    this.filterControl.inputValue = value;
    if (keyCode === 13 && value) {
      this.handleFilter();
    }
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
    this.handleFilter();
  }
  getDisabledDates(stopDate: Date) {
    return getDates(stopDate);
  }

  onExportingGrid(e: any) {
    this.excelService.onExportingExcelGrid(e, 'warehouse-report');
  }

}
