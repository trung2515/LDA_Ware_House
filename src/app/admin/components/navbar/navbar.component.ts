import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  parentMenuSelectId: number = 0
  username: string = ''
  ngOnInit(): void {
    this.menus = [
      {
        link: '/admin/dashboard',
        menuId: 1,
        name: 'Thống kê',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin/report',
        menuId: 2,
        name: 'Báo cáo',
        isParent: true,
        parentId: 0,
      },

      {
        link: '/admin/warehouse-control',
        menuId: 3,
        name: 'Quản lý kho',
        isParent: true,
        parentId: 0,
      },
      // {
      //   link: '/admin/warehouse-operation',
      //   menuId: 4,
      //   name: 'Vận hành kho',
      //   isParent: true,
      //   parentId: -1,
      // },
      {
        link: '/forms/tool-page',
        menuId: 5,
        name: 'Tạo biên bản',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin/configuration',
        menuId: 6,
        name: 'Cấu hình',
        isParent: true,
        parentId: -1,
      },
      // {
      //   link: '/admin/warehouse-control/shift',
      //   menuId: 7,
      //   name: 'Ca làm việc',
      //   isParent: false,
      //   parentId: 3,
      // },
      // {
      //   link: '/admin/warehouse-control/parcel',
      //   menuId: 8,
      //   name: 'Quản lý lô hàng',
      //   isParent: false,
      //   parentId: 3,
      // },
      {
        link: '/admin/report/warehouse-report',
        menuId: 9,
        name: 'Báo cáo số lượng trên máy đóng bao',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/warehouse-control/warehouse-inventory',
        menuId: 10,
        name: 'Tồn kho',
        isParent: false,
        parentId: 3,
      },
      {
        link: '/admin/report/transportation-report',
        menuId: 11,
        name: 'Báo cáo vận chuyển',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/report/consumption-report',
        menuId: 12,
        name: 'Báo cáo nhập xuất',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/report/order-report',
        menuId: 13,
        name: 'Báo cáo đơn hàng',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/warehouse-control/error-report',
        menuId: 14,
        name: 'Xác nhận bao lỗi',
        isParent: false,
        parentId: 3,
      },
    ]

    this.parentMenu = this.menus.filter((m) => m.isParent == true)

    this.username = this.authService.getUser().name


  }

  getChildMenu(menuId: number) {
    return this.menus.filter((m) => m.parentId == menuId)
  }

  selectMenu(menuId: number) {
    console.log('select', menuId)
    this.parentMenuSelectId = menuId
  }

  logOut() {
    this.authService.logOut()
  }

  menus: Menu[] = []
  parentMenu: Menu[] = []
}

export class Menu {
  link: string = ''
  isParent: boolean = false
  name: string = ''
  parentId: number = 0
  menuId: number = 0
}
