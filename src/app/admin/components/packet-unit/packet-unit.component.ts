import { Component, OnInit } from '@angular/core';
import * as _ from 'src/app/_lib/longLib';
import { AdminService } from 'src/app/core/services/admin.service';
import { Response, ResponseState } from 'src/app/core/models/model.pb';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-packet-unit',
  templateUrl: './packet-unit.component.html',
  styleUrls: ['./packet-unit.component.css']
})
export class PacketUnitComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListPackingUnit();
  }
  blur(e: any, obj: any) {
    _.blur(e, obj);
  }
  click(e: any) {
    _.click(e);
  }
  input(e: any, obj: any) {
    _.input(e, obj);
  }
  timeShowMess: any = 3000;
  // -----------------------------------------------------PackingUnit---------------------------------------
  listPackingUnit: any = [];
  itemPackingUnitClicked: any = {};
  isConfirmDelete: boolean = false;
  getListPackingUnit() {
    this.adminService.getListPackingUnit().subscribe((data: any) => {
      this.listPackingUnit = data;
      this.listPackingUnit.sort((a: any, b: any) => {
        return a.namePackingUnit
          .toLowerCase()
          .localeCompare(b.namePackingUnit.toLowerCase());
      });
      console.log('listPackingUnit ', this.listPackingUnit);
      this.listPackingUnit.forEach((item: any, index: any) => {
        item.index = index;
      });
    });
  }
  // add PackingUnit---------------------------------
  isPopupAddPackingUnit: any = false;
  objAddPackingUnit: any = {
    title: 'Thêm đơn vị đóng',
    mess: '',
    formErrMess: '',
    formSuccMess: '',
    input: {
      dvd: { value: '', isValid: false },
      code: { value: '', isValid: false }
    },
    isValid: false
  };
  clickAddPackingUnit(e: any) {
    this.togglePopupAddPackingUnit();
  }
  togglePopupAddPackingUnit() {
    this.objAddPackingUnit = {
      title: 'Thêm đơn vị đóng',
      mess: '',
      formErrMess: '',
      formSuccMess: '',
      input: {
        dvd: { value: '', isValid: false },
        code: { value: '', isValid: false }
      },
      isValid: false
    };
    this.isPopupAddPackingUnit = !this.isPopupAddPackingUnit;
  }
  onSubmitAddPackingUnit(e: any) {
    let namePackingUnit = this.objAddPackingUnit.input.dvd.value;
    let codePackingUnit = this.objAddPackingUnit.input.code.value;
    this.adminService
      .insertPackingUnit(namePackingUnit,codePackingUnit)
      .subscribe((data: any) => {
        console.log(data);
        if (data.state == ResponseState.SUCCESS) {
          this.objAddPackingUnit.formSuccMess = data.message;
          this.objAddPackingUnit.formErrMess = '';
          this.getListPackingUnit();
          {
            this.objAddPackingUnit = {
              title: 'Thêm đơn vị đóng',
              mess: '',
              formErrMess: '',
              formSuccMess: '',
              input: {
                dvd: { value: '', isValid: false }
              },
              isValid: false
            };
            if (this.isPopupAddPackingUnit) this.togglePopupAddPackingUnit();
            this.toastr.success('', 'Thêm mới thành công');
          }
        } else {
          this.toastr.error('', data._message);
        }
      });
  }
  // edit PackingUnit---------------------------------
  isPopupEditPackingUnit: any = false;
  objEditPackingUnit: any = {
    title: 'Chỉnh sửa đơn vị đóng ',
    mess: '',
    formErrMess: '',
    formSuccMess: '',
    input: {
      dvd: { value: '', isValid: false }
    },
    isValid: false
  };
  clickEditPackingUnit(e: any) {
    let order = parseInt(e.target.dataset.order);
    this.itemPackingUnitClicked = this.listPackingUnit[order];
    console.log('order', this.listPackingUnit[order]);
    this.objEditPackingUnit.title = `Chỉnh sửa đơn vị đóng ${this.itemPackingUnitClicked.namePackingUnit}`;
    this.objEditPackingUnit.input.dvd = {
      value: this.itemPackingUnitClicked.namePackingUnit,
      isValid: true
    };
    this.objEditPackingUnit.input.code = {
      value: this.itemPackingUnitClicked.codePackingUnit,
      isValid: true
    };
    this.objEditPackingUnit.isValid = true;
    console.log(this.objEditPackingUnit.input);
    this.togglePopupEditPackingUnit();
  }
  togglePopupEditPackingUnit() {
    this.isPopupEditPackingUnit = !this.isPopupEditPackingUnit;
  }
  onSubmitEditPackingUnit(e: any) {
    let idPackingUnit = this.itemPackingUnitClicked.idPackingUnit;
    let namePackingUnit = this.objEditPackingUnit.input.dvd.value;
    this.adminService
      .updatePackingUnit(idPackingUnit, namePackingUnit)
      .subscribe((data: any) => {
        console.log(data);
        if (data.state == ResponseState.SUCCESS) {
          this.itemPackingUnitClicked = null;
          this.objEditPackingUnit.formSuccMess = data.message;
          this.objEditPackingUnit.formErrMess = '';
          this.getListPackingUnit();

          this.objEditPackingUnit = {
            title: 'Chỉnh sửa đơn vị đóng ',
            mess: '',
            formErrMess: '',
            formSuccMess: '',
            input: {
              dvd: { value: '', isValid: false }
            },
            isValid: false
          };
          if (this.isPopupEditPackingUnit) this.togglePopupEditPackingUnit();
          this.toastr.success('', 'Chỉnh sửa thành công');
        } else {
          this.toastr.error('', data._message);
        }
      });
  }
  // delete PackingUnit ---------------------------------------
  isPopupDeletePackingUnit: any = false;
  objDeletePackingUnit: any = {
    title: 'Xác nhận',
    mess: 'Xóa ',
    formErrMess: '',
    formSuccMess: ''
  };
  clickDeletePackingUnit(e: any) {
    let order = parseInt(e.target.dataset.order);
    console.log(order);
    this.itemPackingUnitClicked = this.listPackingUnit[order];
    this.objDeletePackingUnit.mess = `Xóa đơn vị đóng ${this.itemPackingUnitClicked.namePackingUnit}?`;
    this.togglePopupDeletePackingUnit();
  }
  togglePopupDeletePackingUnit() {
    this.isPopupDeletePackingUnit = !this.isPopupDeletePackingUnit;
  }
  onSubmitDeletePackingUnit() {
    let id = this.itemPackingUnitClicked.idPackingUnit;
    this.adminService.deletePackingUnit(id).subscribe((data: any) => {
      console.log(data);
      if (data.state == ResponseState.SUCCESS) {
        this.itemPackingUnitClicked = null;
        this.objDeletePackingUnit.formSuccMess = data.message;
        this.objDeletePackingUnit.formErrMess = '';
        this.getListPackingUnit();

        this.objDeletePackingUnit = {
          title: 'Xác nhận',
          mess: 'Xóa ',
          formErrMess: '',
          formSuccMess: ''
        };
        if (this.isPopupDeletePackingUnit) this.togglePopupDeletePackingUnit();
        this.isConfirmDelete = false;
        this.toastr.success('', 'Xóa thành công');
      } else {
        if (this.isPopupDeletePackingUnit) this.togglePopupDeletePackingUnit();
        this.isConfirmDelete = false;
        this.toastr.error('', data._message);
      }
    });
  }
}
