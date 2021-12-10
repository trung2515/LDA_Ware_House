import { Component, Input, OnInit, Output } from '@angular/core';

class RadioItemModel {
  id: string | number;
  value: string | number;
}

class RadioModel {
  title: string;
  data: RadioItemModel[];
}
@Component({
  selector: 'app-filter-bar-dashboard',
  templateUrl: './filter-bar-dashboard.component.html',
  styleUrls: ['./filter-bar-dashboard.component.css']
})
export class FilterBarDashboardComponent implements OnInit {
  @Input() monthList1: RadioModel = { title: '', data: [] };
  @Output() s: RadioModel = { title: '', data: []}

  productRadio: RadioModel = {
    title: 'Sản phẩm',
    data: [
      { id: 1, value: 'Alumin 1 tấn' },
      { id: 2, value: 'Alumin 50kg' },
      { id: 3, value: 'Hydrat 1 tấn' },
      { id: 4, value: 'Hydrat 50kg' }
    ]
  };
  threeYearNearestList: RadioModel = {
    title: '',
    data: []
  };
  monthList: RadioModel = {
    title: '',
    data: []
  };

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  startEndDateOfMonth: any = [];

  constructor() {}

  ngOnInit(): void {
    (this.threeYearNearestList = {
      title: 'Năm',
      data: this.getThreeYearsNearest()
    }),
      (this.monthList = {
        title: 'Tháng',
        data: this.getMonthsOfYear()
      });
    this.getDatesOfMonths(this.currentMonth, this.currentYear);
  }

  selectMonth(e: any): void {
    e.preventDefault();
    this.currentMonth = e.target.value;
    this.getDatesOfMonths(this.currentMonth, this.currentYear);
  }
  getThreeYearsNearest() {
    let rs = [];
    for (let i = 0; i < 3; i++) {
      rs.push({ id: Math.random() * i, value: new Date().getFullYear() - i });
    }
    return rs;
  }
  getMonthsOfYear() {
    let rs = [];
    for (let i = 1; i <= 12; i++) {
      rs.push({ id: i, value: i });
    }
    return rs;
  }
  getDatesOfMonths(month: number, year: number) {
    if (month && year) {
      this.startEndDateOfMonth[0] = new Date(year, month, 1).getDate();
      this.startEndDateOfMonth[1] = new Date(year, month, 0).getDate();
    }
  }
}
