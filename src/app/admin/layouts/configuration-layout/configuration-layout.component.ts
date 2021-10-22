import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-layout',
  templateUrl: './configuration-layout.component.html',
  styleUrls: ['./configuration-layout.component.css']
})
export class ConfigurationLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  routing:any=[
    {link:'/configuration/product-category',name:'Danh mục sản phẩm'},
    {link:'/configuration/type-bag',name:'Loại bao'},
    {link:'/configuration/id-bag',name:'Mã bao'},
    {link:'/configuration/warehouse-category',name:'Danh mục kho'},
    {link:'/configuration/partner',name:'Khách hàng/Nhà cung cấp'},
    {link:'/configuration/packet-unit',name:'Đơn vị đóng'},
    {link:'/configuration/device-category',name:'Danh mục thiết bị'},
    {link:'/configuration/bill',name:'Các loại phiếu'},
    {link:'/configuration/job',name:'Công việc'},
    {link:'/configuration/reason',name:'Nguyên nhân'},
  ]

}
