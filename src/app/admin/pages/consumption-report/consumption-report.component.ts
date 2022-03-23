import { filter } from 'rxjs/operators';
import { CardDetailInfo } from 'src/app/core/models/model.pb';
import { FilterModel } from './../warehouse-report/models'
import { ProductionStatisticalModel } from './models'
import { Component, OnInit } from '@angular/core'
import { getDates } from 'src/app/utils/helper'
import CustomStore from 'devextreme/data/custom_store'
// import { LoadOptions } from 'devextreme/data';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'
import { ExcelService } from 'src/app/core/services/excel.service'
import { ReportService } from 'src/app/core/services/report.service'
import Utils from 'src/app/_lib/utils'
import { ToastrService } from 'ngx-toastr'
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

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

  detailInputN: any;
  detailInputX: any;

  rawData: ProductionStatisticalModel[] = [];

  constructor(
    private excelService: ExcelService,
    private reportService: ReportService,
    private toastr: ToastrService,
  ) { }

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
        tabName: 'Báo cáo Pipot Lô NDM',
      },
    ]


    this.disabledDates = this.getDisabledDates(this.startDate)

    // get fields, store of dx-pivot-table
    this.detailInputN = new PivotGridDataSource({
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
        // {
        //   dataField: 'name_kttc',
        //   caption: 'Tên KHTT',
        //   area: 'row',
        //   expanded: true,
        // },
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
          caption: 'Phiếu',
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
          caption: 'Khối lượng (Kg)',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          // return this.rawData.filter(s => s.ballot_type.includes('N'))
          return this.rawData.filter(s => s.ballot_type.includes('N'))

        },
      }),
    })

    this.detailInputX = new PivotGridDataSource({
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
        // {
        //   dataField: 'name_kttc',
        //   caption: 'Tên ',
        //   area: 'row',
        //   expanded: true,
        // },
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
          caption: 'Phiếu',
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
          caption: 'Khối lượng (Kg)',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.rawData.filter(s => s.ballot_type.includes('X'))
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
          caption: 'Lô',
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
          return this.rawData.filter((s) => s.ballot_type == 'NDM')
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
        // {
        //   dataField: 'name_kttc',
        //   caption: 'Tên KHTT',
        //   area: 'row',
        //   expanded: true,
        // },
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
          caption: 'Nhập, Xuất, Tồn',
          dataField: 'typeIn',
          area: 'column',
          sortOrder: 'asc'
        },
        {
          caption: 'Số bao',
          dataField: 'bag_number',
          summaryType: 'sum',
          area: 'data',
        },
        {
          caption: 'Khối lượng (Kg)',
          dataField: 'ton_number',
          summaryType: 'sum',
          area: 'data',
          allowCrossGroupCalculation: true,
        },
      ],
      store: new CustomStore({
        load: (LoadOptions) => {
          return this.rawData;
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
        this.rawData = data.map((d) => new ProductionStatisticalModel(d))
        this.statistics = this.rawData.filter(d => !d.ballot_type.toLowerCase().includes('t') || d.ballot_type.toLowerCase() == 'xtt');
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
    this.detailInputN.reload()
    this.detailInputX.reload()
    this.detailImExInventoryReport.reload()
    this.pipotParcelReport.reload()
  }
  //handle dx-date-box change event
  getStartDate(e: any) {
    this.startDate = e
    if (this.startDate <= this.endDate) {
      this.getData()
    } else {
      this.toastr.warning('Ngày bắt đầu lớn hơn ngày kết thúc')
    }
  }
  getEndDate(e: any) {
    this.endDate = e

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
