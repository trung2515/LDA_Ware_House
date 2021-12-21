import { FilterModel } from './../warehouse-report/models'
import { ProductionStatisticalModel } from './models'
import { ConsumptionReportService } from './consumption.service'
import { Component, OnInit } from '@angular/core'
import { getDates } from 'src/app/utils/helper'
import CustomStore from 'devextreme/data/custom_store'
// import { LoadOptions } from 'devextreme/data';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'
import { ExcelService } from 'src/app/core/services/excel.service'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-consumption-report',
  templateUrl: './consumption-report.component.html',
  styleUrls: ['./consumption-report.component.css'],
})
export class ConsumptionReportComponent implements OnInit {
  startDate: Date = new Date()
  endDate: Date = new Date()
  tabCaptions: any[] = []
  statistics: ProductionStatisticalModel[] = []
  statistics_copy: ProductionStatisticalModel[] = []
  disabledDates: Date[] = []
  title_nav: string = 'Nhập xuất tồn sản phẩm'

  detailInputOutputReport: any
  pipotParcelReport: any

  detailImExInventoryReport: any

  filterControl: FilterModel = {
    objDate: {
      startDate: 0,
      endDate: 0,
    },
    inputValue: '',
  }

  constructor(
    private excelService: ExcelService,
    private consumptionReportService: ConsumptionReportService,
    private reportService: ReportService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    // this.getEndDate = this.getEndDate.bind(this)
    // this.getStartDate = this.getStartDate.bind(this)
    this.getData()
    this.tabCaptions = [
      {
        id: 1,
        tabName: 'Thống kê sản lượng đóng bao - tiêu thụ',
      },
      {
        id: 2,
        tabName: 'Báo các chi tiết nhập xuất sản phẩm',
      },
      {
        id: 3,
        tabName: 'Báo cáo nhập xuất tồn sản phẩm',
      },
      {
        id: 4,
        tabName: 'Báo cáo Pipot Lo NDM',
      },
    ]

    // this.statistics = this.consumptionReportService.getProductionStatistics()

    this.disabledDates = this.getDisabledDates(this.startDate)

    // get fields, store of dx-pivot-table
    this.detailInputOutputReport = new PivotGridDataSource({
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
          caption: 'Loại phiếu',
          dataField: 'ballot_type',
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
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.statistics_copy.filter((s) => s.ballot_type != 'VCLK')
        },
      }),
    })

    this.pipotParcelReport = new PivotGridDataSource({
      fields: [
        {
          dataField: 'date',
          caption: 'Ngay',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          dataField: 'name',
          caption: 'Sản phẩm',
          area: 'column',
          expanded: true,
        },
        {
          dataField: 'type_bag',
          caption: 'Loại bao',
          area: 'column',
          expanded: true,
        },
        {
          caption: 'Loại phiếu',
          dataField: 'ballot_type',
          area: 'column',
          expanded: true,
        },
        {
          dataField: 'consignments_number',
          caption: 'Lo',
          area: 'column',
          expanded: true,
        },
        {
          caption: 'Số bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.statistics_copy.filter((s) => s.ballot_type == 'NDM')
        },
      }),
    })

    this.detailImExInventoryReport = new PivotGridDataSource({
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
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.statistics_copy
        },
      }),
    })
  }

  getData() {
    this.reportService
      .reportInOut(
        Utils.formatDate(this.startDate),
        Utils.formatDate(this.endDate),
      )
      .subscribe((data) => {
        this.statistics = data.map((d) => new ProductionStatisticalModel(d))
        this.statistics_copy = [...this.statistics]
        this.loadPivotGrid()
      })
  }

  // filterWithProductName({ value, keyCode }: any) {
  //   if (keyCode === 13 && value) {
  //     this.filterControl.inputValue = value
  //     this.handleFilter()
  //     this.loadPivotGrid()
  //   }
  // }
  loadPivotGrid = (): void => {
    this.detailInputOutputReport.reload()
    this.detailImExInventoryReport.reload()
    this.pipotParcelReport.reload()
  }
  //handle dx-date-box change event
  getStartDate(date: Date) {
    console.log(date);
    this.startDate = date
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
  }
  getEndDate(e: any) {
    this.endDate = e.value
    // const endDate = this.endDate.getTime()
    // const startDate = this.startDate.getTime()

    // this.filterControl.objDate = {
    //   endDate,
    //   startDate,
    // }

    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
    // this.handleFilter()
  }
  getDisabledDates(stopDate: Date) {
    return getDates(stopDate)
  }


  onExportingGrid(e: any) {
    this.excelService.onExportingExcelGrid(
      e,
      'consumption-report',
      this.title_nav,
    )
  }
  onExportingPivot(e: any, tab: any) {
    const heading = tab.tabName
    let rowTitles
    if (tab.id === 2) {
      rowTitles = this.getRowTitles(this.detailInputOutputReport._fields)
    } else {
      rowTitles = this.getRowTitles(this.detailImExInventoryReport._fields)
    }

    this.excelService.onExportingExcelPivot(
      e,
      'consumption-report',
      heading,
      rowTitles,
    )
  }
  getRowTitles(dataFields: any): string[] {
    return dataFields
      .filter((item: any) => item.area === 'row')
      .map((item: any) => item.caption)
  }
}
