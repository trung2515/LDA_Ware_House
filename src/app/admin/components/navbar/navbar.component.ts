import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor( private router:Router) { }
  parentMenuSelectId: number = 0
  username: string 

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
        name: 'Báo cáo kho',
        isParent: true,
        parentId: 0,
      },
      {
        link: '/admin/report',
        menuId: 3,
        name: 'Báo cáo vận chuyển',
        isParent: true,
        parentId: 0,
      },
      {
        link:'/admin/report/lot-report',
        menuId: 4,
        name: 'Báo cáo lô hàng',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin/report/newOrder-report',
        menuId: 5,
        name: 'Báo cáo đơn hàng',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin/report/transfer-report',
        menuId: 6,
        name: 'Báo cáo điều chuyển',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin/report/newerror-report',
        menuId: 7,
        name: 'Báo cáo lỗi',
        isParent: true,
        parentId: -1,
      },
      {
        link: '/admin',
        menuId: 8,
        name: 'Cấu hình',
        isParent: true,
        parentId: 0,
      },
      
      {
        link: '/admin/report/import-report',
        menuId: 9,
        name: 'Báo cáo nhập kho',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/report/export-report',
        menuId: 10,
        name: 'Báo cáo xuất kho',
        isParent: false,
        parentId: 2,
      }, 
      {
        link: '/admin/report/inventory-report',
        menuId: 11,
        name: 'Báo cáo tồn kho',
        isParent: false,
        parentId: 2,
      },
      {
        link: '/admin/configuration',
        menuId: 12,
        name: 'Cấu hình danh mục',
        isParent: false,
        parentId: 8,
      },
      {
        link: '/admin/config-user',
        menuId: 13,
        name: 'Cấu hình tài khoản',
        isParent: false,
        parentId: 8,
      },
          
      {
        link: '/admin/report/import-report-v2',
        menuId: 14,
        name: 'Báo cáo nhập kho v2',
        isParent: false,
        parentId: 2,
      },
          
      {
        link: '/admin/report/export-report-v2',
        menuId: 15,
        name: 'Báo cáo xuất kho v2',
        isParent: false,
        parentId: 2,
      },
          
      {
        link: '/admin/report/transportation-report',
        menuId: 16,
        name: 'Báo vận chuyển',
        isParent: false,
        parentId: 3,
      },
      {
        link: '/admin/report/transport-report-v2',
        menuId: 17,
        name: 'Báo vận chuyển v2',
        isParent: false,
        parentId: 3,
      },
    ]

    this.parentMenu = this.menus.filter((m) => m.isParent == true)

    this.username = JSON.parse(localStorage.getItem('user'))
    // console.log('token',localStorage.getItem('token'));
    
    


  }

  getChildMenu(menuId: number) {
    return this.menus.filter((m) => m.parentId == menuId)
  }

  selectMenu(menuId: number) {
    console.log('select', menuId)
    this.parentMenuSelectId = menuId
  }


  signOut(){
    localStorage.clear()
    this.router.navigateByUrl('/login');
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
