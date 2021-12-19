import { Component, OnInit } from '@angular/core'
import * as _ from 'src/app/_lib/longLib'
import { AdminService } from 'src/app/core/services/admin.service'
import Query from 'devextreme/data/query'
import Form from 'devextreme/ui/form'
import {
  ProductInfo,
  Response,
  ResponseState,
  ShiftInfo,
} from 'src/app/core/models/model.pb'
import { forkJoin, of } from 'rxjs'
import {
  Resource,
  Appointment,
  ShiftDetail,
  ShiftMaster,
  Product,
  Lot,
  Option,
} from './model'
import { Any } from '@ngx-grpc/well-known-types'
import { ShiftService } from './services/shift.service'
import { AuthService } from 'src/app/core/services/auth.service'
import { ignoreElements } from 'rxjs/operators'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'
import Utils from 'src/app/_lib/utils'
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css'],
})
export class ShiftComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private shiftService: ShiftService,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.appointments = this.shiftService.getAppointments()
    this.adminService.getListShiftDetail(Utils.formatDate(new Date()), Utils.formatDate(new Date())).subscribe(data => {
      // this.appointments = d
    });
  } 

  currentDate: Date = new Date()
  showPopup: boolean = false
  viewData() {
    console.log(this.appointments)
  }
  shiftMaster: ShiftMaster = {
    id: 1,
    name: '',
    shift: 0,

    startDate: new Date(),
    endDate: new Date(),
    description: '',
  }
  shiftDetail: ShiftDetail[] = [
    {
      id: 1,
      option: '',
      type: '',
      product: '',
      productRange: 1,
      packaging: '',
      lot: 1,
      unit: '',
      wareHouse: '',
    },
  ]

  listProduct: Product[] = [
    { name: 'Alumin 1 Tấn' },
    { name: 'Alumin 2 Tấn' },
    { name: 'Alumin 3 Tấn' },
    { name: 'Alumin 4 Tấn' },
  ]
  listOptions: Option[] = [
    { value: 1, name: 'option 1' },
    { value: 2, name: 'option 2' },
  ]
  listProductRange: Lot[] = [{ name: 1 }, { name: 2 }, { name: 3 }]
  listPackaging: Product[] = [{ name: 'Xả đáy' }]
  listType: Product[] = [{ name: 'NDL' }, { name: 'NDM' }]
  listUnit: Product[] = [{ name: 'NUNG' }, { name: 'XTRE' }]
  listWareHouse: Product[] = [{ name: 'Kho TT' }]
  listLot: Lot[] = [{ name: 189 }, { name: 190 }, { name: 200 }, { name: 201 }]
  resources: Resource[] = [
    {
      text: 'Ca 1',
      id: 1,
      color: '#00A560',
    },
    {
      text: 'Ca 2',
      id: 2,
      color: '#3459E6',
    },
    {
      text: 'Ca 3',
      id: 3,
      color: '#ff8817',
    },
  ]
  appointments: Appointment[] = []

  showUpdateButton: boolean = false
  onAppointmentFormOpening(data: any) {
    data.cancel = true
    if (this.authService.getUser().role == 4) {
      this.showPopup = true
      let newStartDate = new Date(data.appointmentData.startDate)
      let newEndDate = new Date(data.appointmentData.startDate)
      console.log('form', data)
      if (data.appointmentData.id) {
        this.showUpdateButton = true
        newStartDate.setHours(data.appointmentData.shift)
        newEndDate.setHours(data.appointmentData.shift + 1)
        this.shiftMaster = {
          id: data.appointmentData.id,
          shift: data.appointmentData.shift,
          name: data.appointmentData.text,
          startDate: newStartDate,
          endDate: newEndDate,
          description: data.appointmentData.description,
        }
        this.shiftDetail = data.appointmentData.shiftDetail
        console.log(this.shiftDetail)
      } else {
        let checkShift = 1
        data.showUpdateButton = false
        for (var i = 0; i < this.appointments.length; i++) {
          if (
            this.appointments[i].startDate.getDate() ==
              data.appointmentData.startDate.getDate() &&
            this.appointments[i].startDate.getMonth() ==
              data.appointmentData.startDate.getMonth() &&
            this.appointments[i].startDate.getFullYear() ==
              data.appointmentData.startDate.getFullYear()
          ) {
            checkShift++
          }
        }
        newStartDate.setHours(checkShift)
        newEndDate.setHours(checkShift + 1)
        this.shiftMaster = {
          id: 1,
          name: 'administrator',
          shift: checkShift,
          startDate: newStartDate,
          endDate: newEndDate,
          description: data.appointmentData.description,
        }
        this.shiftDetail = []
      }
    }
  }
  updateShiftData() {
    let newAppointments: Appointment = {
      id: this.shiftMaster.id,
      shift: this.shiftMaster.shift,
      text: this.shiftMaster.name,
      startDate: this.shiftMaster.startDate,
      endDate: this.shiftMaster.endDate,
      description: this.shiftMaster.description,
      shiftDetail: this.shiftDetail,
    }

    let item = this.appointments.find(
      (element) => element.id == newAppointments.id,
    )

    this.appointments = this.appointments.filter((element) => element !== item)

    this.appointments.push(newAppointments)

    this.showPopup = false
  }

  addShiftData() {
    let idMax = 0
    for (var i = 0; i < this.appointments.length; i++) {
      idMax = this.appointments[i].id > idMax ? this.appointments[i].id : idMax
    }

    let newShift: Appointment = {
      id: idMax + 1,
      shift: this.shiftMaster.shift,
      text: this.shiftMaster.name,
      startDate: this.shiftMaster.startDate,
      endDate: this.shiftMaster.endDate,
      description: this.shiftMaster.description,
      shiftDetail: this.shiftDetail,
    }
    this.appointments.push(newShift)
    // console.log('newShift', newShift)
    // console.log('apointment', this.appointments)
    this.showPopup = false
  }
  closePop() {
    this.showPopup = false
  }

  // -----------------------------------------------------add Shift---------------------------------------
}

// appointments: Appointment[] = [
//   {
//     id: 1,
//     text: 'Phan Đình Trung',
//     shift: 1,
//     startDate: new Date('Tue Nov 02 2021 1:00:00 GMT+0700'),
//     endDate: new Date('Tue Nov 02 2021 11:00:00 GMT+0700'),
//     description: 'test',
//     shiftDetail: [
//       {
//         id: 1,
//         option: 'option 1',
//         type: 'NDL',
//         product: 'Alumin 1 Tấn',
//         productRange: 2,
//         packaging: 'Xả đáy',
//         lot: 189,
//         unit: 'NUNG',
//         wareHouse: 'Kho TT'
//       },
//       {
//         id: 2,
//         option: 'option 2',
//         type: 'NDM',
//         product: 'Alumin 3 Tấn',
//         productRange: 3,
//         packaging: 'Xả đáy',
//         lot: 190,
//         unit: 'XTRE',
//         wareHouse: 'Kho TT'
//       }
//     ]
//   },
//   {
//     id: 2,
//     text: 'Tống Trần Hiếu',
//     shift: 2,
//     startDate: new Date('Tue Nov 02 2021 2:00:00 GMT+0700'),
//     endDate: new Date('Tue Nov 02 2021 17:00:00 GMT+0700'),
//     description: 'test',
//     shiftDetail: [
//       {
//         id: 1,
//         option: 'option 2',
//         type: 'NDL',
//         product: 'Alumin 1 Tấn',
//         productRange: 3,
//         packaging: 'Xả đáy',
//         lot: 190,
//         unit: 'XTRE',
//         wareHouse: 'Kho TT'
//       }
//     ]
//   },
//   {
//     id: 3,
//     text: 'trung hiếu',
//     shift: 1,
//     startDate: new Date('Wed Nov 03 2021  1:00:00 GMT+0700'),
//     endDate: new Date('Wed Nov 03 2021 11:00:00 GMT+0700'),
//     description: 'test',
//     shiftDetail: [
//       {
//         id: 1,
//         option: 'option 2',
//         type: 'NDL',
//         product: 'Alumin 1 Tấn',
//         productRange: 3,
//         packaging: 'Xả đáy',
//         lot: 190,
//         unit: 'XTRE',
//         wareHouse: 'Kho TT'
//       }
//     ]
//   }
// ];
