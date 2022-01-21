import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { input } from 'src/app/_lib/longLib';

@Component({
  selector: 'type-minutes',
  templateUrl: './type-minutes.component.html',
  styleUrls: ['./type-minutes.component.css']
})
export class TypeMinutesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output('checkType') onSelectTypeMinute = new EventEmitter()
 

  selectType:any = {}
  step:number
  header:any
  now: Date = new Date;
  shift: number = 1
  dataTypeMinute = [
    {id:1,title:'Biên bản giao nhận sản phẩm nhập kho nội bộ/ cho đơn vị thuê ngoài'},
    {id:2,title:'Biên bản xác nhận khối lượng công việc bốc xếp lưu kho bốc xếp tiêu thụ sản phẩm hàng ca'},
    {id:3,title:'Biên bản hiện trường bao lỗi'},
    {id:4,title:'Đề nghị nhập sản phẩm'},
    {id:5,title:'Biên bản đề nghị xuất sản phẩm'},
  ]

  checkMinutes(c: number) {
    if(c == 1){
      this.selectType.header = [     
      { source: 'product', caption: 'Tên sản Phầm' },
      { source: 'type', caption: 'Loại sản phẩm' },
      { source: 'packaging', caption: 'Loại bao' },
      { source: 'lot', caption: 'Lô' },
      { source: 'quantity', caption: 'Số lượng' },
      { source: 'wareHouse', caption: 'Kho' },
      { source: 'user', caption: 'User' },
    ]
      this.selectType.nameMinutes = 'Biên bản giao nhận sản phẩm nhập kho'
      this.selectType.checkMinuteType = 1
      this.selectType.selectType = 1
      this.selectType.step = 2
      this.selectType.title = 'BIÊN BẢN GIAO NHẬN'
      this.selectType.subtitle1 = 'SẢN PHẨM NHẬP KHO HÀNG CA'
      this.selectType.subtitle = ''
      this.selectType.inforMitues = ` Hôm nay, ngày ${this.now.getDate()} tháng ${this.now.getMonth() + 1} năm ${this.now.getFullYear()}, vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút, tại kho Mở Rộng của Công ty TNHH MTV Nhôm Lâm Đồng - TKV, chúng tôi gồm có:`
      this.selectType.contentMinute = `Tiến hành giao nhận sản phẩm Alumin đóng bao loại 1 tấn hoàn thành ca ${this.shift}, ngày ${this.now.getDate()} tháng ${this.now.getMonth()+1} năm ${this.now.getFullYear()} để nhập kho như sau:  `
      this.selectType.verify= `Ông (bà) Thủ kho sản phẩm có trách nhiệm quản lý và bảo quản sản phẩm đã nhận theo quy định kể từ ca ${this.shift} ngày ${this.now.getDate()} tháng ${this.now.getMonth()+1} năm  ${this.now.getFullYear()} Biên bản được lập thành 03 bản có giá trị pháp lý như nhau,  Phân xưởng Nung Hydrat giữ 01 bản, Thủ kho giữ 01 bản, 01 bản chuyển Phòng KTTC để làm phiếu nhập kho. Tất cả thành phần đều nhất trí thông qua vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút cùng ngày./.`
    }else if(c == 2){
      this.selectType.header = [     
        { source: 'task', caption: 'Công Việc' },
        { source: 'product', caption: 'Sản Phẩm' },
        { source: 'type', caption: 'Loại sản phẩm' },
        { source: 'packaging', caption: 'Loại bao' },
        { source: 'quantity', caption: 'Số lượng' },
        { source: 'loadWareHouse', caption: 'Kho bốc' },
        { source: 'loadTool', caption: 'Thiết bị bốc' },
        { source: 'unLoadWarehouse', caption: 'Kho dỡ' },
        { source: 'unLoadTool', caption: 'Thiết bị dỡ' },
        { source: 'distance', caption: 'Cung độ (m)' }
      ]
      this.selectType.checkMinuteType = 2
      this.selectType.nameMinutes = 'Biên bản xác nhận khối lượng công việc bốc xếp lưu kho bốc xếp tiêu thụ sản phẩm hàng ca'
      this.selectType.selectType = 1
      this.selectType.step = 2
      this.selectType.title = 'BIÊN BẢN XÁC NHẬN'
      this.selectType.subtitle1 = 'KHỐI LƯỢNG CÔNG VIỆC BỐC XẾP LƯU KHO'
      this.selectType.subtitle2 = 'BỐC XẾP TIÊU THỤ SẢN PHẨM HÀNG CA'
      this.selectType.inforMitues = ` Hôm nay, ngày ${this.now.getDate()} tháng ${this.now.getMonth() + 1} năm ${this.now.getFullYear()}, vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút, tại kho Mở Rộng của Công ty TNHH MTV Nhôm Lâm Đồng - TKV, chúng tôi gồm có:`
      this.selectType.contentMinute = `Tiến hành xác nhận khối lượng công việc thực hiện bốc xếp sản phẩm lưu kho và bốc xếp sản phẩm tiêu thụ thực hiện trong ca ${this.shift}, ngày ${this.now.getDate()} tháng ${this.now.getMonth()+1} năm ${this.now.getFullYear()} như sau:  `
      this.selectType.verify= `Biên bản được lập thành 03 bản có giá trị pháp lý như nhau,  Phân xưởng Nung Hydrat giữ 01 bản, Thủ kho giữ 01 bản, 01 bản chuyển Phòng KTTC để làm phiếu nhập kho. Tất cả thành phần đều nhất trí thông qua vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút cùng ngày./.`
    }else if(c == 3){
      this.selectType.header = [
        { source: 'product', caption: 'Sản Phầm' },
        { source: 'productType', caption: 'Loại sản phẩm' },
        { source: 'packagingType', caption: 'Loại bao' },
        { source: 'lot', caption: 'Số lô' },
        { source: 'seri', caption: 'seri' },
        { source: 'errorCause', caption: 'Nguyên nhân lỗi' },
      ]
      this.selectType.nameMinutes = 'Biên bản hiện trường bao lỗi'
      this.selectType.checkMinuteType = 3
      this.selectType.selectType = 2
      this.selectType.step = 2
      this.selectType.title = 'BIÊN BẢN HIỆN TRƯỜNG BAO LỖI'
      this.selectType.subtitle1 = ''
      this.selectType.subtitle2 = ''
      this.selectType.inforMitues = ` Hôm nay, ngày ${this.now.getDate()} tháng ${this.now.getMonth() + 1} năm ${this.now.getFullYear()}, vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút, tại kho Mở Rộng của Công ty TNHH MTV Nhôm Lâm Đồng - TKV, chúng tôi gồm có:`
      this.selectType.contentMinute = `Chúng tôi cùng tiến hành lập biên bản hiện trường với nội dung như sau:							`
      this.selectType.verify= `Biên bản được lập thành 03 bản có giá trị pháp lý như nhau,  Phân xưởng Nung Hydrat giữ 01 bản, Thủ kho giữ 01 bản, 01 bản chuyển Phòng KTTC để làm phiếu nhập kho. Tất cả thành phần đều nhất trí thông qua vào lúc ${this.now.getHours()} giờ ${this.now.getMinutes()} phút cùng ngày./.`
    }else if(c == 4){
      this.selectType.nameMinutes = 'Biên bản đề nghị nhập sản phẩm'
      this.selectType.checkMinuteType = 4
      this.selectType.step = 2
      this.selectType.selectType = 3
      this.selectType.title = 'ĐỀ NGHỊ NHẬP SẢN PHẨM'
      this.selectType.subtitle1 = ''
      this.selectType.subtitle2 = ''
      this.selectType.inforMitues = ``
      this.selectType.contentMinute = ``
      this.selectType.verify= ``
    }else if(c == 5){
      this.selectType.nameMinutes = 'Biên bản đề nghị xuất sản phẩm'
      this.selectType.checkMinuteType = 5
      this.selectType.step = 2
      this.selectType.selectType = 3
      this.selectType.title = 'ĐỀ NGHỊ XUẤT SẢN PHẨM'
      this.selectType.subtitle1 = ''
      this.selectType.subtitle2 = ''
      this.selectType.inforMitues = ``
      this.selectType.contentMinute = ``
      this.selectType.verify= ``
    }
    this.onSelectTypeMinute.emit(this.selectType)
    // console.log(this.selectType)
  }
}
