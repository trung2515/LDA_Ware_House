import { DataBarChart } from './../../dashboard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-char',
  templateUrl: './bar-char.component.html',
  styleUrls: ['./bar-char.component.css']
})
export class BarCharComponent implements OnInit {
  @Input() dataSource: DataBarChart[] = [];
  @Input() chartID: string = ''
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

  constructor() {}

  ngOnInit(): void {
    this.configChart.chartLegend.toUpperCase()
  }
}
