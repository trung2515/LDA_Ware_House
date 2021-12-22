import { Component, OnInit ,SimpleChanges} from '@angular/core'
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
  ListShift,
} from './model'
import { Any } from '@ngx-grpc/well-known-types'
import { ShiftService } from './services/shift.service'
import { AuthService } from 'src/app/core/services/auth.service'
import { ignoreElements } from 'rxjs/operators'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'
import Utils from 'src/app/_lib/utils'
import { ToastrService } from 'ngx-toastr'
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
    private toastr: ToastrService
  ) {}
  ngOnInit(): void { 
    this.getData()
  }

  now:Date = new Date()
  currentDate: Date = new Date()
  showPopup: boolean = false
  starDateScheduler:Date = new Date()
  popupCreateShift:boolean = false
  appointments: Appointment[] = []
  shiftDetails: ShiftDetail[] = []
  newShiftDetail:ShiftDetail[] = []
  shiftMaster: ShiftMaster = {
    id: 1,
    name: '',
    shift: 0,
    startDate: new Date(),
    endDate: new Date(),
    description: '',
  }
  shiftDetail: ShiftDetail[] = [
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
  listShift: ListShift[] = [{shift: 1, name: 'CA 1'},{shift: 2,name: 'CA 2'},{shift: 3,name: 'CA 3'} ]
  listProductRange: Product[] = [{ name:'Loại 1' }, { name: 'Loại 2' }, { name: 'Loại 3' }]
  listPackaging: Product[] = [{ name: 'Xả đáy' }]
  listType: Product[] = [{ name: 'NDL' }, { name: 'NDM' }]
  listUnit: Product[] = [{ name: 'NUNG' }, { name: 'XTRE' }]
  listWareHouse: Product[] = [{ name: 'Kho TT' }]
  listLot: Lot[] = [{ name: 189 }, { name: 190 }, { name: 200 }, { name: 201 }]
  resources: Resource[] = [
    {
      text: 'CA 1',
      id: 1,
      color: '#B2EDD4',
    },
    {
      text: 'CA 2',
      id: 2,
      color: '#B7D2FF',
    },
    {
      text: 'CA 3',
      id: 3,
      color: '#F6D2B3',
    },
  ]
  getData(){
    this.adminService.getListShiftDetail('2021,11,05', Utils.formatDate(this.now)).subscribe(data => {
      console.log(data);
      for(var i = 0; i < data.length; i++){
        const appointment = new Appointment(data[i]);
        const detail = new ShiftDetail(data[i]);
        if(this.appointments.filter(a => a.id === appointment.id).length  == 0){
            this.appointments.push(appointment)
        }
        this.shiftDetails.push(detail)
      }
      console.log('apoinmment',this.appointments);
      console.log('detail',this.shiftDetails)
    });
  }
  getDetail(idDetail: number){
    console.log(idDetail)
    const rs = this.shiftDetails.filter(d => d.id == idDetail && d.id != 0)
    console.log(rs)
    return rs
  }
  viewData(){
    console.log(this.authService.getUser().user)
  }
  showUpdateButton: boolean = false;
  startDate:Date;
  shiftSelect:any;
  chooseDate(data:any){
    this.startDate = data.value
    console.log(this.startDate)
  }
  chooseShift(data:any){
    this.shiftSelect = data.value.shift
        console.log(this.shiftSelect)
  }
  change(){
    console.log(this.currentDate);
  }
  createShift = ()=>{
    // let childApoinment = this.appointments.filter((element:any)=> element.startDate.getDate() == this.startDate.getDate() && element.startDate.getMonth()==this.startDate.getMonth() && element.startDate.getFullYear()==this.startDate.getFullYear())
    let newApointment:any = {}
        newApointment.nameShift = `CA ${this.shiftSelect}`
        newApointment.date = this.startDate
        newApointment.nameCreatedPerson = this.authService.getUser().user
        newApointment.data = []
        

    let object = new Appointment(newApointment)
    this.appointments.push(object)
    console.log('new',this.newShiftDetail)
    for(var i = 0 ; i< this.newShiftDetail.length ; i++){
      this.newShiftDetail[i].option =`Option ${this.newShiftDetail.length}`
      this.shiftDetails.push(this.newShiftDetail[i])
      this.newShiftDetail = []
    }


    this.popupCreateShift = false
    // console.log('poinment',this.appointments)
    // console.log('detail',this.shiftDetails)
  }

  onAppointmentFormOpening(data: any) {
    console.log(data)
    data.cancel = true
    // (this.authService.getUser().role == 14)
    if (data) {
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
          name: this.authService.getUser().name,
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
    // let newAppointments: Appointment = {
    //   id: this.shiftMaster.id,
    //   shift: this.shiftMaster.shift,
    //   text: this.shiftMaster.name,
    //   startDate: this.shiftMaster.startDate,
    //   endDate: this.shiftMaster.endDate,
    //   description: this.shiftMaster.description,
    //   // shiftDetail: this.shiftDetail,
    // }

    // let item = this.appointments.find(
    //   (element) => element.id == newAppointments.id,
    // )

    // this.appointments = this.appointments.filter((element) => element !== item)

    // this.appointments.push(newAppointments)

    // this.showPopup = false
  }

  addShiftData() {
    // let idMax = 0
    // for (var i = 0; i < this.appointments.length; i++) {
    //   idMax = this.appointments[i].id > idMax ? this.appointments[i].id : idMax
    // }

    // let newShift: Appointment = {
    //   id: idMax + 1,
    //   shift: this.shiftMaster.shift,
    //   text: this.shiftMaster.name,
    //   startDate: this.shiftMaster.startDate,
    //   endDate: this.shiftMaster.endDate,
    //   description: this.shiftMaster.description,
    //   // shiftDetail: this.shiftDetail,
    // }
    // this.appointments.push(newShift)
    // // console.log('newShift', newShift)
    // // console.log('apointment', this.appointments)
    // this.showPopup = false
  }
  
  closePop=()=> {
    this.popupCreateShift = false
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
