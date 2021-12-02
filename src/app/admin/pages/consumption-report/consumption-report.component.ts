import { ConsumptionReportService } from './consumption.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consumption-report',
  templateUrl: './consumption-report.component.html',
  styleUrls: ['./consumption-report.component.css']
})
export class ConsumptionReportComponent implements OnInit {

  startDate: Date = new Date()
  endDate: Date = new Date()
  tabCaptions: any[] = [];
  statistics: any = {}

  detailInputOutputReport: any
  detailImExInventoryReport:any

  constructor(consumptionReportService: ConsumptionReportService) {
    this.statistics = consumptionReportService.getProductionStatistics()

    this.detailInputOutputReport = {
      fields: [
        {
          dataField: 'name',
          caption: 'Tên Sản phẩm',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'name_kttc',
          caption: 'Tên KHTT',
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'type_bag',
          caption: 'Loại bao',
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'type_product',
          caption: 'Loại sản phẩm',
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'ballot_type',
          caption: 'Loại phiếu',
          area: 'column',
        },

        {
          caption: 'Số bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },
        {
          caption: 'Số tấn',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        }

      ],
      store: consumptionReportService.getProductionStatistics()
    }
    this.detailImExInventoryReport = {
      fields: [
        {
          dataField: 'name',
          caption: 'Tên Sản phẩm',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'name_kttc',
          caption: 'Tên KHTT',
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'type_bag',
          caption: 'Loại bao',
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'type_product',
          caption: 'Loại sản phẩm',
          area: 'row',
          expanded: true,
        },
        {
          caption: 'Xuất, tồn',
          dataField: 'mineral_type',
          area: 'column',
        },

        {
          caption: 'Số bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },
        {
          caption: 'Số tấn',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
          allowCrossGroupCalculation: true,
        }

      ],
      store: consumptionReportService.getProductionStatistics()
    }
  }

  ngOnInit(): void {
    this.tabCaptions = [
      {
        id: 1,
        tabName: 'Thống kê sản lượng đóng bao - tiêu thụ',
        state: '1',
        data: this.statistics
      },
      {
        id: 2,
        tabName: 'Báo các chi tiết nhập xuất sản phẩm',
        state: '2',
        data: this.statistics
      },
      {
        id: 3,
        tabName: 'Báo cáo nhập xuất tồn sản phẩm',
        state: '3',
        data: ''
      },
    ];
  }

  //handle dx-date-box change event
  getStartDate(e: any) {
    const year = (new Date(e.value)).getDate()
    console.log(this.startDate);
  }
  getEndDate(e: any) {
    if (this.endDate > this.startDate) {
      const startDate = new Date(this.startDate)
      const endDate = new Date(this.endDate)
      const result = this.statistics.filter((item:any) => {
        const dateOfItem = new Date(item.date)
        return (dateOfItem > startDate) && (dateOfItem < endDate);
      })
      this.statistics = result
    }
  }
}
