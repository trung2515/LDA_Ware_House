import { Component, OnInit } from '@angular/core'
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import {
  ProductInfo,
  Response,
  ResponseState,
  ShiftInfo,
} from 'src/app/core/models/model.pb'
import { forkJoin, of } from 'rxjs'
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css'],
})
export class ShiftComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.getListShift()
    this.getListTypeBill()
    this.getListProduct()
    this.getListParcel()
    this.getListTypeProduct()
    this.getListTypePacket()
    this.getListWareHouse()
  }
  // -----------------------------------------------------Shift---------------------------------------
  listShift: ShiftInfo[] = []
  itemShiftClicked: ShiftInfo = new ShiftInfo({})
  getListShift() {
    this.adminService.getListShift().subscribe((data: any) => {
      this.listShift = data
    })
  }

  // -----------------------------------------------------add Shift---------------------------------------
  timeShowMess: any = 3000
  now: Date = new Date()
  shiftClicked: any = null
  onValueChangedTime(e: any) {
    let value = e.value
    if (!value) return
    let date = _.DATEtoYMD(value)
    this.objAddShift.date = date
    //console.log(date)
    this.findShiftInDate(date)
  }
  onValueChangeShiftInDateForAdd(e: any) {
    let value = e.value
    //console.log(value)
    this.objAddShift.nameShift = value
    this.shiftClicked = this.objShiftInDateForAdd[value]
    if (this.objShiftInDateForAdd[value]) {
      // ca đã tạo
      this.getListShiftDetail(this.objShiftInDateForAdd[value].idShift)
    } else {
      // ca chưa được tạo
      this.listShiftDetail = []
    }
  }
  findShiftInDate(date: any) {
    this.objShiftInDateForAdd = {}
    this.listShift.forEach((item: any) => {
      if (item.date == date) this.objShiftInDateForAdd[item.nameShift] = item
    })
  }
  listFakeShift: any = ['CA 1', 'CA 2']

  isPopupAddShift: any = false
  objAddShift: any = {
    title: 'Thêm mới ca làm việc',
    mess: '',
    formErrMess: '',
    formSuccMess: '',
    date: '',
    idAdmin: 'NV01',
    nameShift: 'CA 1',
  }

  objShiftInDateForAdd: any = {}
  clickAddShift(e: any) {
    this.objShiftInDateForAdd = {}
    this.listShiftDetail = []
    this.togglePopupAddShift()
  }
  togglePopupAddShift() {
    this.isPopupAddShift = !this.isPopupAddShift
  }
  onSubmitAddShift(e: any) {
    let { date, idAdmin, nameShift } = this.objAddShift
    let arr = this.listShiftDetail
    if (!this.shiftClicked) {
      this.adminService
        .newInsertShift(date, nameShift, idAdmin, arr)
        .subscribe((data: any) => {
          if (data.state == ResponseState.SUCCESS) {
            this.objAddShift.formSuccMess = data.message
            this.objAddShift.formErrMess = ''
            this.getListShift()
            setTimeout(() => {
              this.objAddShift = {
                title: 'Thêm mới ca làm việc',
                mess: '',
                formErrMess: '',
                formSuccMess: '',
                date: '',
                idAdmin: 'NV01',
                nameShift: 'CA 1',
              }
              if (this.isPopupAddShift) this.togglePopupAddShift()
            }, this.timeShowMess)
          } else {
            this.objAddShift.formSuccMess = ''
            this.objAddShift.formErrMess = data.message
          }
        })
    } else {
      let idShift = this.shiftClicked.idShift
      this.adminService.newUpdateShift(idShift, arr).subscribe((data: any) => {
        if (data.state == ResponseState.SUCCESS) {
          this.objAddShift.formSuccMess = data.message
          this.objAddShift.formErrMess = ''
          this.getListShift()
          setTimeout(() => {
            this.objAddShift = {
              title: 'Thêm mới ca làm việc',
              mess: '',
              formErrMess: '',
              formSuccMess: '',
              date: '',
              idAdmin: 'NV01',
              nameShift: 'CA 1',
            }
            if (this.isPopupAddShift) this.togglePopupAddShift()
          }, this.timeShowMess)
        } else {
          this.objAddShift.formSuccMess = ''
          this.objAddShift.formErrMess = data.message
        }
      })
    }
  }
  // delete shift
  isPopupDeleteShift: any = false
  objDeleteShift: any = {
    title: 'Xác nhận',
    mess: 'Xóa ',
    formErrMess: '',
    formSuccMess: '',
  }

  clickDelete(idShift: number) {
    this.objDeleteShift.mess = `Xóa ca ${idShift}?`
    this.togglePopupDeleteShift()
  }

  togglePopupDeleteShift() {
    this.isPopupDeleteShift = !this.isPopupDeleteShift
  }

  onSubmitDeleteShift(e: any) {
    let id = this.itemShiftClicked.idShift
    this.adminService.deleteShift(id).subscribe((data: any) => {
      if (data.state == ResponseState.SUCCESS) {
        this.objDeleteShift.formSuccMess = data.message
        this.objDeleteShift.formErrMess = ''
        this.getListShift()
        setTimeout(() => {
          this.objDeleteShift = {
            title: 'Xác nhận',
            mess: 'Xóa ',
            formErrMess: '',
            formSuccMess: '',
          }
          if (this.isPopupDeleteShift) this.togglePopupDeleteShift()
        }, this.timeShowMess)
      } else {
        this.objDeleteShift.formSuccMess = ''
        this.objDeleteShift.formErrMess = data.message
      }
    })
  }

  // detail ------------------------------------------------------------------------------

  listShiftDetail: any = []
  itemShiftDetailClicked: any = {}
  getListShiftDetail(idShift: number) {
    const shiftInfo = this.listShift.filter((s) => (s.idShift = idShift))[0]
    forkJoin([
      this.adminService.getListShiftDetail(idShift),
      of(shiftInfo),
    ]).subscribe(
      ([detailShift, shiftInfo]) => {
        console.log('shiftDetail', detailShift)
        this.listShiftDetail = detailShift
        this.itemShiftClicked = shiftInfo
      },
      (err) => console.log(err),
    )
  }
  isPopupDetailShift: any = false
  objDetailShift: any = {
    title: 'Chi tiết ca làm việc',
    mess: '',
    formErrMess: '',
    formSuccMess: '',
    date: '',
    idAdmin: 'NV01',
    nameShift: 'CA 1',
  }
  listShiftInDay: any = []

  clickDetailShift(id_shift: number) {
    this.getListShiftDetail(id_shift)
    this.togglePopupDetailShift()
  }
  togglePopupDetailShift() {
    this.isPopupDetailShift = !this.isPopupDetailShift
  }
  onValueChangeShiftInDateForDetail(e: any) {
    let value = e.value
    this.listShiftInDay.forEach((item: any) => {
      if (item.nameShift == value) {
        this.itemShiftClicked = item
        this.getListShiftDetail(this.itemShiftClicked.idShift!)
      }
    })
  }
  onSubmitDetailShift(e: any) {
    let arr = this.listShiftDetail
    let idShift = this.itemShiftClicked.idShift
    this.adminService.newUpdateShift(idShift, arr).subscribe((data: any) => {
      console.log(data)
      if (data.state == ResponseState.SUCCESS) {
        this.objDetailShift.formSuccMess = data.message
        this.objDetailShift.formErrMess = ''
        this.getListShift()
        setTimeout(() => {
          this.objDetailShift = {
            title: 'Chi tiết ca làm việc',
            mess: '',
            formErrMess: '',
            formSuccMess: '',
            date: '',
            idAdmin: 'NV01',
            nameShift: 'CA 1',
          }
          if (this.isPopupDetailShift) this.togglePopupDetailShift()
        }, this.timeShowMess)
      } else {
        this.objDetailShift.formSuccMess = ''
        this.objDetailShift.formErrMess = data.message
      }
    })
  }

  //  getData selectbox --------------------------
  listTypeBill: any = []
  getListTypeBill() {
    this.adminService.getListTypeBill().subscribe((data: any) => {
      this.listTypeBill = data
    })
  }

  listProduct: any = []
  getListProduct() {
    this.adminService.getListProduct().subscribe((data: any) => {
      this.listProduct = data
    })
  }

  listTypeProduct: any = []
  getListTypeProduct() {
    this.adminService.getListTypeProduct().subscribe((data: any) => {
      this.listTypeProduct = data
      //console.log("listTypeProduct",data)
    })
  }

  listTypePacket: any = []
  getListTypePacket() {
    this.adminService.getListTypePacket().subscribe((data: any) => {
      this.listTypePacket = data
      //console.log("listTypePacket",data)
    })
  }

  listParcel: any = []
  getListParcel() {
    this.adminService.getListParcel().subscribe((data: any) => {
      this.listParcel = data
      //console.log("listParcel",data)
    })
  }

  listWareHouse: any = []
  getListWareHouse() {
    this.adminService.getListWareHouse().subscribe((data: any) => {
      this.listWareHouse = data
    })
  }

  onParcelValueChanged(event: any) {
    // this.listProduct = this.listParcel.map((l: any) => new ProductInfo(l))
    console.log('value changed', event);
    this.listProduct = []
  }
}
