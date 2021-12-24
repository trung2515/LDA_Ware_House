import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  FilterControllerModel,
  paramChangeModel,
  TransportationEquipment,
} from './models';
import { ReportService } from 'src/app/core/services/report.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabInfo: any[] = [];

  // bar chart
  dataSource: Product[] = [];
  dataSource_transportation: Product[] = [];
  transportationEquipments: TransportationEquipment[] = [
    { name: 'Palang', fieldCode: 'palang' },
    { name: 'Cẩu tiến tuấn', fieldCode: 'cautientuan' },
    { name: 'Xe nâng vườn tre', fieldCode: 'vtre' }
  ];

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
    },
    product_name: 'Alumin 1 tấn'
  };

  configChartDB: any = {
    ...this.configCommon,
    color: '#3459E6',
    chartLegend: 'Thống kê sản lượng đóng bao',
    dataField: 'packaging_qty',
    argumentField: 'date'
  };
  configChartTT: any = {
    ...this.configCommon,
    color: '#00A560',
    chartLegend: 'Thống kê sản lượng tiêu thụ',
    dataField: 'packaging_qty',
    argumentField: 'date'
  };

  configLineChartDB: any = {
    ...this.configCommon,
    color: '#3459E6',
    chartLegend: 'Thống kê sản lượng đóng bao',
    dataField: 'packaging_qty',
    argumentField: 'date',
    title:"Thống kê sản lượng đóng bao",
    series: this.transportationEquipments
  };
  configLineChartTT: any = {
    ...this.configCommon,
    color: '#00A560',
    chartLegend: 'Thống kê sản lượng tiêu thụ',
    dataField: 'packaging_qty',
    argumentField: 'date',
    title: "Thống kê sản lượng tiêu thụ",
    series: this.transportationEquipments
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

  constructor(
    dashboardService: DashboardService,
    private reportService: ReportService
  ) {
    this.dataSource_transportation = dashboardService.getDataForLine()
    // this.typeMachines = dashboardService.getTypeMachines()
  }
  ngOnInit(): void {
    this.getData();

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

  getStartDate() {
    const startDate = new Date(
      parseInt(this.filterController.year),
      parseInt(this.filterController.month) - 1,
      this.filterController.dayAround.startDate
    );
    return Utils.formatDate(startDate);
  }

  getEndDate() {
    const endDate = new Date(
      parseInt(this.filterController.year),
      parseInt(this.filterController.month) - 1,
      this.filterController.dayAround.endDate
    );
    return Utils.formatDate(endDate);
  }

  getData() {
    this.reportService
      .reportQrCode(this.getStartDate(), this.getEndDate())
      .subscribe(data => {
        let totalProduct: number = 0;
        let productArr: Product[] = [];
        productArr = data.map(d => new Product(d));
        console.log(data.filter(d => d.codeIn.includes('VCLK')));
        for (var i = 0; i < productArr.length; i++) {
          if (
            this.dataSource.filter(
              d => d.name == productArr[i].name && d.date == productArr[i].date
            ).length == 0
          ) {
            let product: Product = productArr[i];

            product.packaging_qty = productArr.filter(
              p => (p.name = productArr[i].name)
            ).length;
            this.dataSource.push(product);
          }
        }
      });
  }

  onFilterChange(changeValue: any) {
    this.filterController = {
      ...this.filterController,
      dayAround: {
        startDate: changeValue[0],
        endDate: changeValue[1]
      }
    };
    console.log(this.filterController);

    // this.getData();
  }
  onRadioFilterChange({ value, name }: paramChangeModel) {
    switch (name) {
      case 'year':
        this.filterController = {
          ...this.filterController,
          dayAround: {
            startDate: 1,
            endDate: 25
          },
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
        this.configChartDB = {
          ...this.configChartDB,
          product_name: value
        };
        this.configChartTT = {
          ...this.configChartTT,
          product_name: value
        };
        this.configLineChartDB = {
          ...this.configLineChartDB,
          product_name: value
        };
        this.configChartTT = {
          ...this.configChartTT,
          product_name: value
        };

        break;
    }
    this.getData();
  }
}
