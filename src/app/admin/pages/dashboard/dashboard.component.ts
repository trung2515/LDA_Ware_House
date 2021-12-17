import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  TypeMachineModel,
  FilterControllerModel,
  paramChangeModel
} from './models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tabInfo: any[] = [];

  // bar chart
  dataSource: Product[] = [];
  typeMachines: TypeMachineModel[] = [];

  configCommon = {
    borderTooltip: {
      color: '#CBD3EE',
      dashStyle: 'solid',
      visible: true,
      width: 1
    },
    color: '#3459E6',
    fontLegend: {
      color: '#000000',
      family: 'Roboto',
      opacity: 1,
      size: 16,
      weight: 400
    },
    fontTitle: {
      color: '#000000',
      family: 'Roboto',
      opacity: 1,
      size: 15,
      weight: 400
    }
  };

  configChart: any = {
    ...this.configCommon,
    color: '#3459E6',
    chartLegend: 'Thống kê sản lượng đóng bao'
  };
  configChartDB: any = {
    ...this.configCommon,
    color: '#00A560',
    chartLegend: 'Thống kê sản lượng tiêu thụ'
  };
  filterController: FilterControllerModel = {
    product_name: 'Alumin 1 tấn',
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1),
    dayAround: {
      startDate: 1,
      endDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      ).getDate()
    }
  };

  constructor(dashboardService: DashboardService) {
    this.dataSource = dashboardService.getData();
    this.typeMachines = dashboardService.getTypeMachines();
  }

  ngOnInit(): void {
    this.tabInfo = [
      {
        id: 1,
        tabName: 'Thống kê sản lượng đóng bao - tiêu thụ'
      },
      {
        id: 2,
        tabName: 'Thống kê vận chuyển'
      }
    ];
  }
  onFilterChange(changeValue: any) {
    this.filterController = {
      ...this.filterController,
      dayAround: {
        startDate: changeValue[0],
        endDate: changeValue[1]
      }
    };
  }
  onRadioFilterChange({ value, name }: paramChangeModel) {
    switch (name) {
      case 'year':
        this.filterController = {
          ...this.filterController,
          year: value
        };
        break;
      case 'month':
        this.filterController = {
          ...this.filterController,
          month: value
        };
        break;
      default:
        this.filterController = {
          ...this.filterController,
          product_name: value
        };
        break;
    }
  }
}
