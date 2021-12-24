import {  Product } from './../../models';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-line-char',
  templateUrl: './line-char.component.html',
  styleUrls: ['./line-char.component.css']
})
export class LineCharComponent implements OnInit, OnChanges{
  @Input() idChartLine: string = '';
  @Input() chartID: string = '';
  @Input() products: Product[] = [];
  @Input() configChart: any = {
    chartLegend: 'Thống kê sản lượng ...',
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
      size: 12,
      weight: 400
    },
    fontTitle: {
      color: '#000000',
      family: 'Roboto',
      opacity: 1,
      size: 16,
      weight: 400
    },
    series: [
      {caption: 'Palang', code: 'palang'}
    ]
  };

  @Input() typeMachines: any = [];
  dataSource: any[] = [];

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.loadDataSources(this.filterControl)
  }

  ngOnInit(): void {
    // this.loadDataSources(this.filterControl)
  }

  // loadDataSources(filterControl: any): void {
  //   const _products = this.products.filter(product => {
  //     const startDateFilter = new Date(
  //       filterControl.month +
  //         '/' +
  //         filterControl.dayAround.startDate +
  //         '/' +
  //         filterControl.year
  //     ).getTime();
  //     const endDateFilter = new Date(
  //       filterControl.month +
  //         '/' +
  //         filterControl.dayAround.endDate +
  //         '/' +
  //         filterControl.year
  //     ).getTime();
  //     return (
  //       product.name === this.filterControl.product_name &&
  //       new Date(product.date).getTime() >= startDateFilter &&
  //       new Date(product.date).getTime() <= endDateFilter
  //     );
  //   });
  //   if (this.chartID === 'lineChart-db') {
  //     this.dataSource = _products.map(product => ({
  //       day: new Date(product.date).getDate().toString(),
  //       palang:product.machines_packaging.palang,
  //       cautientuan: product.machines_packaging.cautientuan,
  //       xenangvuontre: product.machines_packaging.xenangvuontre,

  //     }));
  //   } else {
  //     this.dataSource = _products.map(product => ({
  //       day: new Date(product.date).getDate().toString(),
  //       palang:product.machines_consumption.palang,
  //       cautientuan: product.machines_consumption.cautientuan,
  //       xenangvuontre: product.machines_consumption.xenangvuontre,

  //     }));
  //   }
  // }
}
