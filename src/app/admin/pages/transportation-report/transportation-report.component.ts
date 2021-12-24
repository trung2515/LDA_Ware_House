import { FilterModel } from './../warehouse-report/models'
import { TransportationReportModel } from './models'
import { Component, OnInit } from '@angular/core'
import { getDates } from 'src/app/utils/helper'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'
import CustomStore from 'devextreme/data/custom_store'
import { Workbook } from 'exceljs'
import { exportPivotGrid } from 'devextreme/excel_exporter'
import * as saveAs from 'file-saver'
import { ExcelService } from 'src/app/core/services/excel.service'
import { ReportService } from 'src/app/core/services/report.service'
import { ToastrService } from 'ngx-toastr'
import Utils from 'src/app/_lib/utils'
@Component({
  selector: 'app-transportation-report',
  templateUrl: './transportation-report.component.html',
  styleUrls: ['./transportation-report.component.css'],
})
export class TransportationReportComponent implements OnInit {
  allowSearch: boolean = false
  title_nav = 'Báo cáo vận chuyển'
  now = new Date()
  startDate: Date
  endDate: Date
  tabInfo: any[] = []
  detailLoadUnLoadReport: any = {}
  detailUnLoadWDVReport: any = {}
  detailLoadWDVReport: any = {}
  disabledDates: Date[] = []

  filterControl: FilterModel = {
    objDate: {
      startDate: 0,
      endDate: 0,
    },
    inputValue: '',
  }

  transportationList: TransportationReportModel[] = []
  transportationList_copy: TransportationReportModel[] = []

  constructor(
    private excelService: ExcelService,
    private reportService: ReportService,
    private toastr: ToastrService,
  ) {
    // this.transportationList = transportationService.getTranslationReport();

    // tab 2
    this.detailLoadUnLoadReport = new PivotGridDataSource({
      fields: [
        {
          dataField: 'product_name',
          caption: 'Sản phẩm',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          dataField: 'product_type',
          caption: 'Loại sản phẩm',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          dataField: 'bag_type',
          caption: 'Loại bao',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          dataField: 'work',
          caption: 'Công việc',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          caption: 'Nơi bốc',
          dataField: 'lau_warehouse',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          caption: 'Nơi dỡ',
          dataField: 'unloading_warehouse',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          caption: 'Thiết bị bốc',
          dataField: 'loading_equipment',
          area: 'row',
          width: 70,
          expanded: true,
        },
        {
          caption: 'Thiết bị dỡ',
          dataField: 'unloading_equipment',
          area: 'row',
          width: 70,
          expanded: true,
        },

        {
          caption: 'ca',
          dataField: 'shift',
          area: 'column',
        },

        {
          caption: 'Bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },

        {
          caption: 'Tấn',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      // store: transportationService.getTranslationReport()
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.transportationList
        },
      }),
    })
    // tab 3
    this.detailUnLoadWDVReport = new PivotGridDataSource({
      fields: [
        {
          caption: 'Thiết bị dỡ/chỉ tiêu',
          dataField: 'unloading_equipment',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'Sản phẩm',
          dataField: 'product_name',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'Nơi dỡ',
          dataField: 'unloading_warehouse',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'ca',
          dataField: 'shift',
          area: 'column',
        },

        {
          caption: 'Bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },

        {
          caption: 'Tấn',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.transportationList.filter(t => t.unloading_equipment != '' && t.unloading_warehouse != '')
        },
      }),
    })
    // tab 4
    this.detailLoadWDVReport = new PivotGridDataSource({
      fields: [
        {
          caption: 'Thiết bị bốc/chỉ tiêu',
          dataField: 'loading_equipment',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'Sản phẩm',
          dataField: 'product_name',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'Nơi bốc',
          dataField: 'lau_warehouse',
          headerFilter: {
            allowSearch: true,
          },
          area: 'row',
          expanded: true,
        },
        {
          caption: 'ca',
          dataField: 'shift',
          area: 'column',
        },
        {
          caption: 'Bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },

        {
          caption: 'Tấn',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.transportationList.filter(t => t.loading_equipment != '' && t.lau_warehouse != '')
        },
      }),
    })
  }

  ngOnInit(): void {
    this.startDate = new Date(this.now.getFullYear(), this.now.getMonth() - 1, this.now.getDate())
    this.endDate = this.now
    console.log(Utils.formatDate(new Date()));

    this.getData()
    // this.transportationList_copy = [...this.transportationList]
    this.disabledDates = this.getDisabledDates(this.startDate)
    this.tabInfo = [
      {
        id: 1,
        tabName: 'Thống kê tổng hợp vận chuyển đóng bao - tiêu thụ',
      },
      {
        id: 2,
        tabName: 'Báo các chi tiết bốc - dỡ sản phẩm theo thiết bị',
      },
      {
        id: 3,
        tabName: 'Báo cáo chi tiết dỡ sản phẩm theo thiết bị',
      },
      {
        id: 4,
        tabName: 'Báo cáo chi tiết bốc sản phẩm theo thiết bị',
      },
    ]
  }

  getData() {
    this.reportService
      .reportTransport(
        Utils.formatDate(this.startDate),
        Utils.formatDate(this.endDate),
      )
      .subscribe((data) => {
        this.transportationList = data.filter(d => d.quantity > 0).map(
          (d) => new TransportationReportModel(d),
        )
        // console.log(this.transportationList);
        // this.handleFilter()
        this.loadPivotGrid()
      })
  }
  // handle dx-date-box change event

  getStartDate(e: any) {

    this.startDate = e
    console.log(this.startDate)

    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
  }

  getEndDate(e: any) {
    this.endDate = e
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
  }
  getDisabledDates(stopDate: Date) {
    return getDates(stopDate)
  }
  filterWithProductName({ value, keyCode }: any) {
    if (keyCode === 13 && value) {
      this.filterControl.inputValue = value
      this.handleFilter()
      this.loadPivotGrid()
    }
  }
  loadPivotGrid = (): void => {
    this.detailLoadUnLoadReport.reload()
    this.detailUnLoadWDVReport.reload()
    this.detailLoadWDVReport.reload()
  }
  handleFilter = () => {
    const { objDate, inputValue } = this.filterControl
    // filter only date
    if (objDate.endDate && !inputValue) {
      if (this.endDate >= this.startDate) {
        const result = this.transportationList.filter((item: any) => {
          const dateOfItem = new Date(item.date).getTime()
          return (
            dateOfItem >= objDate.startDate && dateOfItem <= objDate.endDate
          )
        })
        this.transportationList_copy = result
      }
    }
    // filter only product name
    else if (inputValue && !objDate.endDate) {
      this.transportationList_copy = this.transportationList.filter(
        (product) => {
          return (
            product.product_name
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          )
        },
      )
    }
    // filter with both conditions
    else {
      const result = this.transportationList.filter((product: any) => {
        const dateOfItem = new Date(product.date).getTime()
        return (
          dateOfItem >= objDate.startDate &&
          dateOfItem <= objDate.endDate &&
          product.product_name
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        )
      })
      this.transportationList_copy = result
      this.loadPivotGrid()
    }
  }

  onExportingGrid(e: any) {
    this.excelService.onExportingExcelGrid(
      e,
      'transportation-report',
      this.title_nav,
    )
  }
  onExportingPivot = (e: any, tab: any) => {
    const heading = tab.tabName
    let rowTitles
    if (tab.id === 2) {
      rowTitles = this.getRowTitles(this.detailLoadUnLoadReport._fields)
    } else if (tab.id === 3) {
      rowTitles = this.getRowTitles(this.detailUnLoadWDVReport._fields)
    } else {
      rowTitles = this.getRowTitles(this.detailLoadWDVReport._fields)
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
