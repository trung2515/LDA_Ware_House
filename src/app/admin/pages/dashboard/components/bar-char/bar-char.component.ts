import {
  Product,
  BarCharDateModel,
  FilterControllerModel
} from './../../models';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.component.html',
  styleUrls: ['./bar-char.component.css']
})
export class BarCharComponent implements OnInit, OnChanges {
  @Input() products: Product[] = [];
  @Input() filterControl: FilterControllerModel = {
    product_name: '',
    year: '',
    month: '',
    dayAround: {
      startDate: 0,
      endDate: 0
    }
  };
  @Input() chartID: string = '';
  @Input() configChart: any = {
    chartLegend: 'Thống kê sản lượng đóng bao',
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

  dataSource: BarCharDateModel[] = [];
  sumSomething: string = '';

  constructor() {}

  ngOnChanges(change: SimpleChanges) {
    this.loadDataSources(this.filterControl);
  }
  ngOnInit(): void {
    this.configChart.chartLegend.toUpperCase();
    this.loadDataSources(this.filterControl);
  }
  loadDataSources(filterControl: any): void {
    const _products = this.products.filter(product => {
      const startDateFilter = new Date(
        filterControl.month +
          '/' +
          filterControl.dayAround.startDate +
          '/' +
          filterControl.year
      ).getTime();
      const endDateFilter = new Date(
        filterControl.month +
          '/' +
          filterControl.dayAround.endDate +
          '/' +
          filterControl.year
      ).getTime();
      return (
        product.name === this.filterControl.product_name &&
        new Date(product.date).getTime() >= startDateFilter &&
        new Date(product.date).getTime() <= endDateFilter
      );
    });
    if (this.chartID === 'chart-db') {
      this.dataSource = _products.map(product => ({
        tons: product.packaging_qty,
        day: new Date(product.date).getDate().toString()
      }));
      this.sumSomething =
        'Tổng sản lượng đóng bao: ' +
        this.dataSource.reduce((sum, product) => sum + product.tons, 0);
    } else {
      this.dataSource = _products.map(product => ({
        tons: product.amountConsumption,
        day: new Date(product.date).getDate().toString()
      }));
      this.sumSomething =
        'Tổng sản lượng tiêu thụ: ' +
        this.dataSource.reduce((sum, product) => sum + product.tons, 0);
    }
  }
}
