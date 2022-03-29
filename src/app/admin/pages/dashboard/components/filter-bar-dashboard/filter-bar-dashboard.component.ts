import { paramChangeModel } from './../../models'
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import {
  FilterControllerModel,
  InventoryFLMonthModel,
  Product,
} from '../../models'
import { ReportService } from 'src/app/core/services/report.service'

class RadioItemModel {
  id: string | number
  value: string | number
  name: string
  checked?: boolean
}

class RadioModel {
  title: string
  data: RadioItemModel[]
}
@Component({
  selector: 'app-filter-bar-dashboard',
  templateUrl: './filter-bar-dashboard.component.html',
  styleUrls: ['./filter-bar-dashboard.component.css'],
})
export class FilterBarDashboardComponent implements OnInit {
  @Input() monthList1: RadioModel = { title: '', data: [] }
  // @Input() products: Product[] = []

  @Output() onFilterChanges = new EventEmitter()
  @Output() onRadioChanges = new EventEmitter()

  inventoryMonths: InventoryFLMonthModel[] = []
  inventorySum: number = 0

  productRadio: RadioModel = {
    title: 'Sản phẩm',
    data: [
      { id: 1, name: 'product_name', value: 'Alumin 1 tấn', checked: true },
      { id: 3, name: 'product_name', value: 'Hydrat 1 tấn', checked: false },
    ],
  }
  threeYearNearestList: RadioModel = {
    title: '',
    data: [],
  }
  monthList: RadioModel = {
    title: '',
    data: [],
  }

  @Input() currentYear: number = new Date().getFullYear()
  @Input() currentMonth: number = new Date().getMonth() + 1
  @Input() startEndDateOfMonth: any = []

  @Input() filterControl: FilterControllerModel = {
    product_name: '',
    year: '',
    month: '',
    dayAround: {
      startDate: 0,
      endDate: 0,
    },
  }

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    ; (this.threeYearNearestList = {
      title: 'Năm',
      data: this.getThreeYearsNearest(),
    }),
      (this.monthList = {
        title: 'Tháng',
        data: this.getMonthsOfYear(),
      })
    this.getDatesOfMonths(this.currentMonth, this.currentYear)
    this.reportService.reportWarehouse().subscribe((d) => {
      d.filter(d => d.nameProduct != '').forEach(d => {
        if (this.inventoryMonths.filter(i => i.name == d.nameProduct
          && i.type == d.idTypeProduct).length == 0) {
          let inv = new InventoryFLMonthModel(d);
          this.inventoryMonths.push(inv)
        }
        this.inventorySum += parseInt(d.quantity)
        if (this.inventoryMonths.filter(i => i.name == d.nameProduct
          && i.type == d.idTypeProduct).length > 0) {
          console.log('update total' + d.nameProduct + ' ' + d.quantity);
          for (var i = 0; i < this.inventoryMonths.length; i++) {
            if (this.inventoryMonths[i].name == d.nameProduct && this.inventoryMonths[i].type == d.idTypeProduct)
              this.inventoryMonths[i].total += parseInt(d.quantity)
          }
        }
      })
    })
  }
  ngOnChanges(change: SimpleChanges): void {
  }

  onOptionChanged(e: any) {
    this.onFilterChanges.emit(e.value)
  }
  onRadioChange(e: any) {

    const param: paramChangeModel = {
      value: e.target.value,
      name: e.target.name,
    }
    this.onRadioChanges.emit(param)
  }
  // getTotalInventoryFlMonth(month: number): number {
  //   return this.products.reduce((sum, item) => {
  //     if (month === new Date(item.date).getMonth() + 1) {
  //       return sum + item.inventory_qty
  //     } else return sum
  //   }, 0)
  // }
  // getInventoryMonth(month: number) {
  //   let results: any = [];
  //   this.productRadio.data.forEach(element => {
  //     let rs: InventoryFLMonthModel = {
  //       name: element.value.toString(),
  //       total: this.products.reduce(
  //         (_total: number, nextItem: Product): number => {
  //           if (
  //             nextItem.name === element.value &&
  //             new Date(nextItem.date).getMonth() + 1 === month
  //           ) {
  //             return _total + nextItem.inventory_qty;
  //           } else return _total;
  //         },
  //         0
  //       )
  //     };
  //     results.push(rs);
  //   });
  //   return results;
  // }

  selectMonth(e: any): void {
    this.currentMonth = e.target.value
    this.getDatesOfMonths(this.currentMonth, this.currentYear)
  }
  getThreeYearsNearest() {
    let rs = []
    for (let i = 0; i < 3; i++) {
      rs.push({
        id: Math.random() * i,
        value: new Date().getFullYear() - i,
        name: 'year',
        checked: i === 0 ? true : false,
      })
    }
    return rs
  }
  getMonthsOfYear() {
    let rs = []
    const currentMonth = new Date().getMonth() + 1
    for (let i = 1; i <= 12; i++) {
      rs.push({
        id: i * Math.random(),
        value: i,
        name: 'month',
        checked: i === currentMonth ? true : false,
      })
    }
    return rs
  }
  getDatesOfMonths(month: number, year: number) {
    if (month && year) {
      this.startEndDateOfMonth[0] = new Date(year, month, 1).getDate()
      this.startEndDateOfMonth[1] = new Date(year, month, 0).getDate()
    }
  }
}
