import { DashboardService } from './dashboard.service'
import { Component, OnInit } from '@angular/core'
import {
  Product,
  TypeMachineModel,
  FilterControllerModel,
  paramChangeModel,
} from './models'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tabInfo: any[] = []

  // bar chart
  dataSource: Product[] = []
  typeMachines: TypeMachineModel[] = []

  configCommon = {
    borderTooltip: {
      color: '#CBD3EE',
      dashStyle: 'solid',
      visible: true,
      width: 1,
    },
    color: '#3459E6',
    fontLegend: {
      color: '#000000',
      family: 'Roboto',
      opacity: 1,
      size: 16,
      weight: 400,
    },
    fontTitle: {
      color: '#000000',
      family: 'Roboto',
      opacity: 1,
      size: 15,
      weight: 400,
    },
  }

  configChart: any = {
    ...this.configCommon,
    color: '#3459E6',
    chartLegend: 'Thống kê sản lượng đóng bao',
  }
  configChartDB: any = {
    ...this.configCommon,
    color: '#00A560',
    chartLegend: 'Thống kê sản lượng tiêu thụ',
  }
  filterController: FilterControllerModel = {
    product_name: 'Alumin 1 tấn',
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1),
    dayAround: {
      startDate: 1,
      endDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0,
      ).getDate(),
    },
  }

  constructor(
    dashboardService: DashboardService,
    private reportService: ReportService,
  ) {
    // this.dataSource = dashboardService.getData()
    // this.typeMachines = dashboardService.getTypeMachines()
  }

  getStartDate() {
    const startDate = new Date(
      parseInt(this.filterController.year),
      parseInt(this.filterController.month) - 1,
      this.filterController.dayAround.startDate,
    )
    return Utils.formatDate(startDate)
  }

  getEndDate() {
    const endDate = new Date(
      parseInt(this.filterController.year),
      parseInt(this.filterController.month) - 1,
      this.filterController.dayAround.endDate,
    )
    return Utils.formatDate(endDate)
  }

  getData() {
    this.reportService
      .reportQrCode(this.getStartDate(), this.getEndDate())
      .subscribe((data) => {
        let totalProduct: number = 0
        let productArr: Product[] = []
        productArr = data.map((d) => new Product(d))
        for (var i = 0; i < productArr.length; i++) {
          if (
            this.dataSource.filter((d) => (d.name == productArr[i].name && d.date == productArr[i].date))
              .length == 0
          ) {
            let product: Product = productArr[i];
            product.packaging_qty =  productArr.filter(p => p.name = productArr[i].name).length;
            this.dataSource.push(product)
          }
        }
        console.log(this.dataSource)
      })
  }

  ngOnInit(): void {
    this.tabInfo = [
      {
        id: 1,
        tabName: 'Thống kê sản lượng đóng bao - tiêu thụ',
      },
      {
        id: 2,
        tabName: 'Thống kê vận chuyển',
      },
    ]
    this.getData()
  }
  onFilterChange(changeValue: any) {
    this.filterController = {
      ...this.filterController,
      dayAround: {
        startDate: changeValue[0],
        endDate: changeValue[1],
      },
    }
    this.getData()
  }
  onRadioFilterChange({ value, name }: paramChangeModel) {
    switch (name) {
      case 'year':
        this.filterController = {
          ...this.filterController,
          year: value,
        }
        break
      case 'month':
        this.filterController = {
          ...this.filterController,
          month: value,
        }
        break
      default:
        this.filterController = {
          ...this.filterController,
          product_name: value,
        }
        break
    }
    this.getData()
  }
}
