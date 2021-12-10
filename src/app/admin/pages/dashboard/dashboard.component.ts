import { DashboardService, DataBarChart, TypeMachine } from './dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabInfo: any[] = [];
  dataSource: DataBarChart[] = [];
  dataSourceLine: any = [];
  typeMachines:TypeMachine[] = []

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
  }
  configChart: any = {
    ...this.configCommon,
    chartLegend: 'Thống kê sản lượng đóng bao',
  };
  configChartDB: any = {
    chartLegend: 'Thống kê sản lượng tiêu thụ',
    borderTooltip: {
      color: '#CBD3EE',
      dashStyle: 'solid',
      visible: true,
      width: 1
    },
    color: '#00A560',
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

  constructor(dashboardService: DashboardService) {
    this.dataSource = dashboardService.getData();
    this.dataSourceLine = dashboardService.getDataForLine()
    this.typeMachines = dashboardService.getTypeMachines()
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
}
