import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  FilterControllerModel,
  paramChangeModel,
  TransportationEquipment,
  TransportModel,
} from './models';
import { ReportService } from 'src/app/core/services/report.service';
import Utils from 'src/app/_lib/utils';
import { TransportInfo } from 'src/app/core/models/model.pb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabInfo: any[] = [];

  product_select: string = 'Alumin 1 Tấn'
  // bar chart
  dataSource: Product[] = [];
  dataSourceN: Product[] = [];
  dataSourceX: Product[] = [];

  dataSource_transportation: any[] = [];
  dataSource_transportationXTT: any[] = [];
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
    chartLegend: 'Thống kê vận chuyển lưu kho',
    dataField: 'value',
    argumentField: 'day',
    title: "Thống kê vận chuyển lưu kho",
    series: this.transportationEquipments
  };
  configLineChartTT: any = {
    ...this.configCommon,
    color: '#00A560',
    chartLegend: 'Thống kê vận chuyển tiêu thụ',
    dataField: 'value',
    argumentField: 'day',
    title: "Thống kê vận chuyển tiêu thụ",
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
    private dashboardService: DashboardService,
    private reportService: ReportService
  ) {
    // this.dataSource_transportation = dashboardService.getDataForLine()
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
    setTimeout(() => {
      console.log(this.product_select)
      this.reportService
        .reportInOut(this.getStartDate(), this.getEndDate())
        .subscribe(data => {
          let productArr: Product[] = [];
          productArr = data.filter(d => d.nameProduct.trim().toLowerCase() == this.product_select.toLowerCase()).map(d => new Product(d));
          // console.log(data.filter(d => d.codeIn.includes('VCLK')));
          //   for (var i = 0; i < productArr.length; i++) {
          // this.dataSource = productArr;
          console.log(this.dataSource)
          for (var i = 0; i < productArr.length; i++) {
            let product: Product = productArr[i];
            // console.log(product);
            if (this.dataSource.filter(d => d.name == product.name && d.date == product.date).length == 0)
              this.dataSource.push(product);

          }
          for (var i = 0; i < this.dataSource.length; i++) {
            this.dataSource[i].packaging_qty = 0;
            productArr.forEach(
              p => {
                if (p.name == this.dataSource[i].name && p.date == this.dataSource[i].date && p.code_type_bill == this.dataSource[i].code_type_bill) {
                  console.log('sum' + p.inventory_qty);
                  this.dataSource[i].packaging_qty += p.inventory_qty || 0
                }
              }
            );
          }
          this.dataSourceN = this.dataSource.filter(d => d.code_type_bill == 'N')
          this.dataSourceX = this.dataSource.filter(d => d.code_type_bill == 'X')
          console.log(this.dataSource)
        });
      this.reportService
        .reportTransport(this.getStartDate(), this.getEndDate())
        .subscribe(
          data => {
            this.dataSource_transportation = [];
            this.dataSource_transportationXTT = [];
            let lstTransport: TransportModel[] = data.filter(d => d.nameProduct.toLowerCase() == this.product_select.toLowerCase()).map(d => new TransportModel(d));
            let lstMaster: TransportModel[] = []
            for (var i = 0; i < lstTransport.length; i++) {
              if (lstMaster.filter(d =>
                d.fieldCode == lstTransport[i].fieldCode
                && lstTransport[i].fieldCode != ''
                && lstTransport[i].date == d.date).length == 0) {
                let total = lstTransport.filter(l => l.fieldCode == lstTransport[i].fieldCode
                  && l.date == lstTransport[i].date && l.fieldCode != ''
                ).reduce((sum, current) => sum + current.value, 0)
                let data: TransportModel = lstTransport[i];
                data.value = total;
                if (data.fieldCode != '') {
                  lstMaster.push(data);
                }
              }
            }
            console.log('master', lstMaster);
            for (var i = 0; i < lstMaster.length; i++) {
              lstMaster[i].value = 0;
              lstTransport.forEach(l => {
                if (l.fieldCode == lstMaster[i].fieldCode && l.date == lstMaster[i].date)
                  lstMaster[i].value += l.value
              })
              if (this.dataSource_transportation.filter(d => lstMaster[i].date == d.day).length == 0 && lstMaster[i].type != 'XTT') {
                let rs: any = {};
                rs.day = lstMaster[i].date;
                let totalPalang = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('palang') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                let totalCau = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('cau') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                let totalXeNang = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('xe') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                rs.palang = totalPalang
                rs.cautientuan = totalCau
                rs.vtre = totalXeNang
                this.dataSource_transportation.push(rs)
              }
              if (this.dataSource_transportationXTT.filter(d => lstMaster[i].date == d.day && lstMaster[i].type == 'XTT').length == 0) {
                let rs: any = {};
                rs.day = lstMaster[i].date;
                let totalPalang = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('palang') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                let totalCau = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('cau') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                let totalXeNang = lstMaster.filter(l => l.fieldCode.toLowerCase().includes('xe') && lstMaster[i].date == l.date).reduce((sum, current) => sum + current.value, 0);
                rs.palang = totalPalang
                rs.cautientuan = totalCau
                rs.vtre = totalXeNang
                this.dataSource_transportationXTT.push(rs)
              }
            }
            console.log(this.transportationEquipments)
            console.log(this.dataSource_transportation)
          }
        )
    }, 100)

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
        this.product_select = value;
        break;
    }
    this.getData();
  }
}


interface LooseObject {
  [key: string]: any
}
