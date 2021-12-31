import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { OptionModel } from 'src/app/order/pages/order-registration/model';
import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as _ from 'src/app/_lib/longLib';
import { AdminService } from 'src/app/core/services/admin.service';
import {
  ProductInfo,
  Response,
  ResponseState,
  ShiftDetailInfo,
  ShiftInfo,
  TypeBillInfo
} from 'src/app/core/models/model.pb';
import { forkJoin, of } from 'rxjs';
import {
  Resource,
  Appointment,
  ShiftDetail,
  ShiftMaster,
  Product,
  Lot,
  ListShift,
  optionApoiment
} from './model';
import { ShiftService } from './services/shift.service';
import { AuthService } from 'src/app/core/services/auth.service';
import Utils from 'src/app/_lib/utils';
import { ToastrService } from 'ngx-toastr';
import { DxDataGridComponent, DxDateBoxComponent, DxSelectBoxComponent } from 'devextreme-angular';
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private shiftService: ShiftService,
    private authService: AuthService,
    private toastr: ToastrService,
    private warehouseService: WareHouseService
  ) { }
  ngOnInit(): void {
    this.initFilter();
    this.getData();
  }
  @ViewChild('detailGrid') detailGrid!: DxDataGridComponent
  isDisabled: boolean = false
  selectShift: string = 'CA 1'
  selectDate: Date = new Date();
  currentDate: Date = new Date();

  showPopup: boolean = false;
  starDateScheduler: Date = new Date();
  popupCreateShift: boolean = false;
  appointments: Appointment[] = [];
  shiftDetails: ShiftDetail[] = [];
  showUpdateButton: boolean = false;
  startDate: Date;
  shiftSelect: string = 'CA 1';
  shiftMaster: ShiftMaster = {
    id: 1,
    name: '',
    shift: 0,
    startDate: new Date(),
    endDate: new Date(),
    description: ''
  };
  currentConsignment: Appointment
  shiftDetail: ShiftDetail[] = [];

  listProduct: OptionModel[] = [];
  listOptions: OptionModel[] = [
    new OptionModel({ objectCode: 'Option 1', objectName: 'Option 1' }),
    new OptionModel({ objectCode: 'Option 2', objectName: 'Option 2' }),
    new OptionModel({ objectCode: 'Option 3', objectName: 'Option 3' }),
    new OptionModel({ objectCode: 'Option 4', objectName: 'Option 4' }),
    new OptionModel({ objectCode: 'Option 5', objectName: 'Option 5' }),
  ];

  listShift: OptionModel[] = [
    new OptionModel({ objectCode: 1, objectName: 'CA 1' }),
    new OptionModel({ objectCode: 2, objectName: 'CA 2' }),
    new OptionModel({ objectCode: 3, objectName: 'CA 3' })

  ];
  listProductRange: OptionModel[] = [
    new OptionModel({ objectCode: 1, objectName: 'Loại 1' }),
    new OptionModel({ objectCode: 2, objectName: 'Loại 2' }),
    new OptionModel({ objectCode: 3, objectName: 'Loại 3' }),
  ];
  listPackaging: OptionModel[] = [];
  listPackagingUnit: OptionModel[] = [];
  listType: OptionModel[] = [];
  listUnit: OptionModel[] = [];
  listWareHouse: OptionModel[] = [];
  listLot: OptionModel[] = [];
  resources: Resource[] = [
    {
      text: 'CA 1',
      id: 1,
      color: '#B2EDD4'
    },
    {
      text: 'CA 2',
      id: 2,
      color: '#B7D2FF'
    },
    {
      text: 'CA 3',
      id: 3,
      color: '#F6D2B3'
    }
  ];

  titlePopup: string = ''
  popupVisible: boolean
  selectIdShift: number
  selectionDate: Date
  selectionShift: string

  selectDateChanged(e: any) {
    this.selectionDate = e.value
  }
  selectShiftChanged(e: any) {
    this.selectionShift = e.value
  }
  initFilter() {
    this.adminService.getListTypeBill().subscribe(d => {
      this.listType = d.filter((t: TypeBillInfo) => { return t.codeTypeBill == 'NDM' || t.codeTypeBill == 'NDL' }).map((t: any) => new OptionModel(t));
    })

    this.adminService.getListWareHouse().subscribe(d => {
      this.listWareHouse = d.map((m: any) => new OptionModel(m))
    })


    forkJoin([
      this.adminService.getListTypePacket(),
      this.adminService.getListPackingUnit(),
      this.adminService.getListTypeProduct(),
      this.adminService.getListProduct(),
      this.warehouseService.getListParcel(),
      this.adminService.getListMasterData()])
      .subscribe(([
        packet_types,
        packaging_units,
        product_types,
        products,
        parcels,
        masterdata]) => {

        this.listProductRange = product_types.map((p: any) => new OptionModel(p));
        this.listProduct = products.map((p: any) => new OptionModel(p))
        this.listLot = parcels.map((p: any) => new OptionModel(p));
        this.listPackaging = packet_types.map((m) => new OptionModel(m))
        this.listUnit = packaging_units.map((pk: any) => new OptionModel(pk))
        console.log(this.listPackaging);
      })
  }
  onClickSave = () => {
    this.detailGrid.instance.saveEditData();
  }
  onClickCancel = () => {
    this.detailGrid.instance.cancelEditData();

  }
  showDetailShift(data: any) {
    this.popupVisible = true;
    if (data != null) {
      this.isDisabled = true
      this.titlePopup = 'Chi tiết ca làm việc'
      let newStartDate = new Date(data.appointmentData.startDate);
      let newEndDate = new Date(data.appointmentData.startDate);
      console.log('form', data);
      this.selectIdShift = data.appointmentData.id;

      if (data.appointmentData.id) {
        newStartDate.setHours(data.appointmentData.shift);
        newEndDate.setHours(data.appointmentData.shift + 1);
        this.shiftMaster = {
          id: data.appointmentData.id,
          shift: data.appointmentData.shift,
          name: data.appointmentData.text,
          startDate: newStartDate,
          endDate: newEndDate,
          description: data.appointmentData.description
        };
        console.log(data.appointmentData.shiftDetail);
        this.shiftDetail = this.shiftDetails.filter(s => s.idMaster == data.appointmentData.id);
        this.selectShift = 'CA ' + data.appointmentData.shift;
        this.selectDate = new Date(data.appointmentData.startDate)
        console.log(this.shiftDetail)
        console.log(this.selectShift)
      }
    } else {
      this.isDisabled = false
      this.shiftDetail = []
      this.selectShift = 'CA 1'
      this.titlePopup = 'Tạo ca làm việc mới'
    }
  }
  getData() {
    console.log(this.currentDate)
    let month = this.currentDate.getMonth();
    let year = this.currentDate.getFullYear();
    let toDate = Utils.formatDate(new Date(year, month + 1, 0))
    let fromDate = Utils.formatDate(new Date(year, month, 1))
    console.log(fromDate, toDate)
    this.adminService
      .getListShiftDetail(fromDate, toDate)
      .subscribe(data => {
        console.log(data);
        this.shiftDetails = []
        for (var i = 0; i < data.length; i++) {
          const appointment = new Appointment(data[i]);
          const detail = new ShiftDetail(data[i]);
          if (
            this.appointments.filter(a => a.id === appointment.id).length == 0
          ) {
            this.appointments.push(appointment);
          }
          this.shiftDetails.push(detail);
        }
      });
  }
  getDetail(idDetail: number) {
    const rs = this.shiftDetails.filter(d => d.id == idDetail && d.id != 0);
    return rs;
  }


  SaveShift = () => {
    console.log('save shift')
    console.log(this.shiftDetail)
    console.log(this.selectionDate)
    console.log(this.selectionShift)
    console.log(this.selectIdShift)
    let nameShift = this.selectionShift;
    let date = Utils.formatDate(this.selectionDate);
    console.log('save shift', nameShift)
    console.log('save shift', date)

    let shiftDetailInfo: ShiftDetailInfo[] = []
    this.shiftDetail.forEach(s => {
      let data: ShiftDetailInfo = new ShiftDetailInfo();
      data.codeParcel = s.lot
      data.codeProduct = s.product
      data.codeTypeBill = s.type
      data.codeTypePacket = s.type_bag
      data.codeWareHouse = s.wareHouse
      data.idTypeProduct = s.productRange
      data.codePackingUnit = s.unit
      data.optionName = s.option
      shiftDetailInfo = [...shiftDetailInfo, data]
    })
    let countShiftDetail: number = this.shiftDetails.filter(s => this.selectShift == s.nameShift && Utils.formatDate(this.selectDate) == s.date).length;
    console.log(countShiftDetail);
    if (countShiftDetail > 0 && this.selectIdShift > 0) {
      console.log('update', this.selectIdShift)
      this.adminService.newUpdateShift(this.selectIdShift, shiftDetailInfo)
        .subscribe(reply => {
          console.log(reply)
          if (reply.state == ResponseState.SUCCESS) {
            this.toastr.success(reply.message)
            this.popupVisible = false
            this.getData()
          } else {
            this.toastr.warning(reply.message)
          }
        });
    } else {
      console.log('new')
      this.adminService.newInsertShift(date, nameShift, this.authService.getUser().id, shiftDetailInfo)
        .subscribe(reply => {
          if (reply.state == ResponseState.SUCCESS) {
            this.toastr.success(reply.message)
            this.popupVisible = false
            this.getData()
          } else {
            this.toastr.warning(reply.message)
          }
        });
    }
  };

  onAppointmentFormOpening(data: any) {
    console.log('click', data.appointmentData);
    data.cancel = true;
    if (this.appointments.filter(a => a.id == data.appointmentData.id).length > 0) {
      this.showDetailShift(data)
    }
  }

  closePop = () => {
    this.popupVisible = false;
  };

}
