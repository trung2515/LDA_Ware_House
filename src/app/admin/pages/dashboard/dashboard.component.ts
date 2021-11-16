import { Component, OnInit } from '@angular/core'
import { CardInfo, ChartIn, ChartModel } from './component/model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: CardInfo[] = []
  grossProductData: ChartModel[] = [
    {
      month: 'Jan',
      In: 803,
      Out: 823,
    },
    {
      month: 'Feb',
      In: 316,
      Out: 332,
    },
    {
      month: 'Mar',
      In: 452,
      Out: 459,
    },
    {
      month: 'Apr',
      In: 621,
      Out: 642,
    },
    {
      month: 'May',
      In: 290,
      Out: 294,
    },
  ]
  constructor() {}

  ngOnInit(): void {
    this.data = [
      {
        name: 'Nhập kho trong ngày',
        value: '5,120',
        image: '/assets/svg/upload.svg',
      },
      {
        name: 'Xuất kho trong ngày',
        value: '2,560',
        image: '/assets/svg/download.svg',
      },
      {
        name: 'Đơn hàng trong ngày',
        value: '120',
        image: '/assets/svg/order.svg',
      },
    ]
  }

  onPointClick(e: any) {
    e.target.select()
  }

  /** */
  catBreeds: ChartIn[] = [
    {
      breed: 'Domestic Shorthair',
      count: 61046,
    },
    {
      breed: 'American Shorthair',
      count: 37545,
    },
    {
      breed: 'Domestic Medium Hair',
      count: 16776,
    },
    {
      breed: 'Domestic Long Hair',
      count: 15049,
    },
    {
      breed: 'Siamese',
      count: 14582,
    },
    {
      breed: 'Maine Coon',
      count: 10852,
    },
    {
      breed: 'Persian',
      count: 6717,
    },
    {
      breed: 'Russian Blue',
      count: 3864,
    },
    {
      breed: 'Himalayan',
      count: 3701,
    },
    {
      breed: 'Ragdoll',
      count: 3567,
    },
    {
      breed: 'Bengal',
      count: 3118,
    },
    {
      breed: 'Manx',
      count: 2349,
    },
    {
      breed: 'British Shorthair',
      count: 2171,
    },
    {
      breed: 'Norwegian Forest Cat',
      count: 1827,
    },
    {
      breed: 'Bombay',
      count: 1580,
    },
  ]

  pointClick(e: any) {
    const point = e.target
    if (point.isSelected()) {
      point.clearSelection()
    } else {
      point.select()
    }
  }

  done(e: any) {
    e.component.getSeriesByPos(0).getPointsByArg('Siamese')[0].select()
  }
}
