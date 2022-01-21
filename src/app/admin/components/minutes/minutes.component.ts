import { Component, OnInit } from '@angular/core';
import { ListDetail, ListTypeMinutes } from './models';
import * as _ from 'src/app/_lib/longLib'
import { type } from 'os';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';
import { ResponseState } from 'src/app/core/models/model.pb';
@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {


  constructor(private toast: ToastrService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getDetail()

  }
  dataTypeMinutes: ListTypeMinutes[] = []
  dataMinutes: any = []
  isPopupAddMinutes: boolean = false
  isPopupEditMinutes: boolean = false
  idDetail: number
  name: string
  type: string
  cate: string
  minutesDetail: any = {}
  objAddMinuteDetail: any = {
    title: '',
    mess: '',
    formErrMess: '',
    formSuccMess: '',
    input: {
      code: { value: '', isValid: false },
      name: { value: '', isValid: false },
    },
    isValid: false
  }
  masterData: any
  department: ListDetail[]
  represent: ListDetail[]
  representPeson: ListDetail[]
  decision: ListDetail[]
  isConfirmDelete: boolean = false
  isPopupDeleteMinutes: boolean = false


  blur(e: any, obj: any) {
    _.blur(e, obj)
    console.log(obj.input)
  }
  click(e: any) {
    _.click(e)
  }
  input(e: any, obj: any) {
    _.input(e, obj)
  }

  getDetail() {
    this.adminService.getListMasterData().subscribe((masterData) => {
      console.log('masterData', masterData);
      this.masterData = masterData
      this.represent = masterData.filter((e: any) => e.objectType == 'PARTNER' && e.objectCate !== 'TYPE_PACKET').map(m => new ListDetail(m))
      this.representPeson = masterData.filter((e: any) => e.objectType == 'PARTNER' && e.objectCate == 'TYPE_PACKET').map(m => new ListDetail(m))
      this.department = masterData.filter((e: any) => e.objectType == 'POSITION').map(m => new ListDetail(m))
      this.decision = masterData.filter((e: any) => e.objectType == 'DECISION').map(m => new ListDetail(m))
      this.demoData()
    });
  }
  demoData() {
    this.dataTypeMinutes = [
      {
        listDetail: this.represent,
        name: 'Các bên đại diện',
        type: 'PARTNER',
        cate: 'CUSTOMER'
      },
      {
        listDetail: this.representPeson,
        name: 'Ông/bà đại diện',
        type: 'PARTNER',
        cate: 'TYPE_PACKET'

      },
      {
        listDetail: this.department,
        name: 'Chức vụ',
        type: 'POSITION',
        cate: 'CUSTOMER'

      },
      {
        listDetail: this.decision,
        name: 'Quyết định',
        type: 'DECISION',
        cate: 'CUSTOMER'
      }
    ]
    console.log(this.dataTypeMinutes);

  }
  showAddMinutesDetail(name: any, type: any, cate: any) {
    this.objAddMinuteDetail = {
      input: {
        code: { value: '', isValid: false },
        name: { value: '', isValid: false },
      },
      isValid: false
    }
    this.name = name
    this.type = type
    this.cate = cate
    this.isPopupAddMinutes = true
  }
  addMinutesDetail() {
    console.log('input', this.objAddMinuteDetail);
    let code = this.objAddMinuteDetail.input.code.value
    let name = this.objAddMinuteDetail.input.name.value
    this.adminService.insertListMasterData(name, code, this.type, this.cate)
      .subscribe((data: any) => {
        console.log('success', data)
        if (data.state == ResponseState.SUCCESS) {
          this.getDetail()
          this.objAddMinuteDetail = {
            title: 'Thêm sản phẩm',
            mess: '',
            formErrMess: '',
            formSuccMess: '',
            input: {
              code: { value: '', isValid: false },
              name: { value: '', isValid: false },
            },
            isValid: false
          }
          console.log(this.dataTypeMinutes);
          this.isPopupAddMinutes = false
          this.toast.success('', 'Thêm mới thành công')
        } else {
          this.isPopupAddMinutes = false
          this.toast.error('', data._message)
        }

      })
  }
  showEditMinutes(id: number, name: any, code: any, cate: any, type: any) {
    this.isPopupEditMinutes = true;
    this.idDetail = id;
    this.cate = cate;
    this.type = type;
    this.objAddMinuteDetail.input.code = { value: code, isValid: true }
    this.objAddMinuteDetail.input.name = { value: name, isValid: true }
    this.objAddMinuteDetail.isValid = true
    console.log(this.objAddMinuteDetail);

  }
  editMinutesDetail() {
    let name = this.objAddMinuteDetail.input.name.value
    this.adminService.updateListMasterData(this.idDetail, name, this.type, this.cate)
      .subscribe((data: any) => {
        console.log('success', data)
        if (data.state == ResponseState.SUCCESS) {
          this.getDetail()
          this.objAddMinuteDetail = {
            input: {
              code: { value: '', isValid: false },
              name: { value: '', isValid: false },
            },
            isValid: false
          }
          console.log(this.dataTypeMinutes);
          this.isPopupEditMinutes = false

          this.toast.success('', 'Chỉnh sửa thành công')
        } else {
          this.objAddMinuteDetail = {
            title: '',
            name: '',
            id: 0,
            atc: '',
            input: {
              code: { value: '', isValid: false },
              name: { value: '', isValid: false },
            },
            isValid: false
          }
          this.isPopupEditMinutes = false
          this.toast.error('', data._message)
        }
      })
  }
  showDeleteDetail(id: number, name: string, type: any) {
    this.idDetail = id;
    this.name = name
    this.type = type
    this.isPopupDeleteMinutes = true
    console.log(id, type);

  }
  deleteMinutesMinutes() {
    this.adminService.deleteListMasterData(this.idDetail, this.type)
      .subscribe((data: any) => {
        console.log('success', data)
        if (data.state == ResponseState.SUCCESS) {
          this.getDetail()
          this.objAddMinuteDetail = {
            input: {
              code: { value: '', isValid: false },
              name: { value: '', isValid: false },
            },
            isValid: false
          }
          console.log(this.dataTypeMinutes);
          this.isConfirmDelete = false
          this.isPopupDeleteMinutes = false
          this.toast.success('', 'Xóa thành công')
        } else {
          this.objAddMinuteDetail = {
            input: {
              code: { value: '', isValid: false },
              name: { value: '', isValid: false },
            },
            isValid: false
          }
          this.isConfirmDelete = false
          this.isPopupDeleteMinutes = false
          this.toast.error('', data._message)
        }
      })
  }
  closePopup() {
    this.isConfirmDelete = false
    this.isPopupAddMinutes = false
    this.isPopupDeleteMinutes = false
    this.isPopupEditMinutes = false
  }
}
