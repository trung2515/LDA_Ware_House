import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin.service';
import { ShiftDetail } from '../model';
import {
  InputOptionModel,
  MachineModel,
  OptionDetail,
  ProductConfirm
} from './model';
import {
  ConfirmProduction1000,
  ConfirmProduction1000Info,
  ResponseState
} from 'src/app/core/models/model.pb';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-list-type-one',
  templateUrl: './list-type-one.component.html',
  styleUrls: ['./list-type-one.component.css']
})
export class ListTypeOneComponent implements OnInit {
  title: string = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
  isEditing: boolean = false;
  now: Date = new Date('2022/01/01');
  ca_no_option: string = 'Ca 2';

  aOptionShiftList: OptionDetail[] = [];
  optionEditing: any;
  optionForm: FormGroup;

  inputs_options: InputOptionModel[] = [];

  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private adminService: AdminService,
    private shiftService: ShiftService,
    private formBuilder: FormBuilder,
    private wareHouseService: WareHouseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.appointments = this.shiftService.getAppointments();
    this.getData();
  }
  getData() {
    this.wareHouseService
      .getConfirmProduct(this.getCurrentDate(this.now))
      .subscribe(data => {
        // console.log('data: ',data);

        let currentShifts = [];
        for (const _data of data) {
          currentShifts.push(new ProductConfirm(_data));
        }
        // console.log(currentShifts);

        const selectShift = currentShifts.filter(item => {
          return (
            item.nameShift.toLowerCase() == this.ca_no_option.toLowerCase()
          );
        });
        if (selectShift.length > 0) {
          currentShifts = selectShift
            .filter(
              item =>
                item.nameShift.toLowerCase() === this.ca_no_option.toLowerCase()
            )
            .sort(
              (a, b) =>
                parseInt(a.option.split(' ')[1]) -
                parseInt(b.option.split(' ')[1])
            );

          let options: OptionDetail[] = [];
          for (let i = 1; i <= this.getQtyOption(currentShifts); i++) {
            const stringOpt = 'option ' + i;
            let optionObj: OptionDetail = {
              option: stringOpt,
              idParcel: 0,
              warehouse: '',
              packagingUnit: '',
              creator: '',
              machine_list: [],
              typeProduct: '',
              nameProduct: '',
              typePacket: '',
              idShiftDetail: 0
            };
            currentShifts.forEach(item => {
              if (item.option.toLowerCase() === stringOpt) {
                optionObj.idShiftDetail = item.idShiftDetail;
                optionObj.idParcel = parseInt(item.idParcel);
                optionObj.warehouse = item.codeWareHouse;
                optionObj.packagingUnit = item.codePackingUnit;
                optionObj.creator = item.creator;
                optionObj.typeProduct = item.typeProduct;
                optionObj.nameProduct = item.nameProduct;
                optionObj.typePacket = item.typePacket;
                optionObj.machine_list.push({
                  code: item.codeEquipment,
                  qty: item.quantity
                });
                optionObj.machine_list.sort((a, b) =>
                  a.code > b.code ? 1 : b.code > a.code ? -1 : 0
                );
              }
            });
            console.log(optionObj);

            options.push(optionObj);
          }
          this.aOptionShiftList = [...new Set(options)];
        } else {
          this.showError('Chưa có dữ liệu ca làm việc này!');
        }
      });
  }
  initForm(machineList: MachineModel[]) {
    this.optionForm = this.formBuilder.group({});
    let _form_d: any = {};

    for (const machine of machineList) {
      let input: InputOptionModel = {
        label: 'Máy ' + machine.code,
        formControlName: 'machine_' + machine.code
      };
      this.inputs_options.push(input);
      _form_d['machine_' + machine.code] = [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ];
    }
    this.optionForm = this.formBuilder.group(_form_d);
  }
  getQtyOption(shifts: ProductConfirm[]): number {
    let numOption: any = [];

    shifts.forEach(item => {
      numOption.push(item.option.toLowerCase());
    });
    numOption = [...new Set(numOption)].length;
    return numOption;
  }
  onUpdateData() {
    let dataInput: ConfirmProduction1000Info = new ConfirmProduction1000Info();
    let machine_list: ConfirmProduction1000[] = [];

    if (!this.optionForm.valid) {
      for (const key in this.optionForm.controls) {
        if (this.optionForm.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>(
            this.optionForm.controls[key]
          );
          control.markAsTouched();
        }
      }
    } else {
      // machine list
      for (const key in this.optionForm.value) {
        let machine: ConfirmProduction1000 = new ConfirmProduction1000();
        machine.idShiftDetail = this.optionEditing.idShiftDetail;
        machine.codeEquipment = key.split('_')[1];
        machine.quantity = this.optionForm.value[key];

        machine_list.push(machine);
      }

      dataInput.user = this.authService.getUser().id;
      dataInput.data = machine_list;

      console.log(dataInput);

      this.wareHouseService.update1000Kg(dataInput).subscribe(reply => {
        if (reply.state == ResponseState.SUCCESS) {
          this.showSuccess('Sửa thành công');
          this.isEditing = false;
        } else {
          this.showError(reply.message);
        }
      });
    }
  }

  onShiftOptionClicked = (option: any) => {
    this.title = 'Chỉnh sửa thông tin nhập đóng mới (lại)';

    // const indexAppointment = this.appointments.findIndex(
    //   item => item.id === this.currentAppointment.id
    // );
    // const indexOption = this.currentAppointment.shiftDetail.findIndex(
    //   item => item.id === option.id
    // );

    this.optionEditing = option;
    this.initForm(option.machine_list);

    // get & set data to input control
    for (let i = 0; i < option.machine_list.length; i++) {
      this.optionForm
        .get(this.getKeyForm()[i])
        .setValue(option.machine_list[i].qty);
    }

    this.isEditing = true;
    this.title = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
  };
  onDateValueChanged(e: any) {
    this.getData();
  }
  onSelectShiftChange = (e: any) => {
    this.getData();
  };

  getCurrentDate(date: Date): string {
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }
  getCurrentShift(ca_option: string) {
    return Number(ca_option.split(' ')[1]);
  }
  getKeyForm() {
    let rs = [];

    for (const key in this.optionForm.value) {
      if (Object.prototype.hasOwnProperty.call(this.optionForm.value, key)) {
        rs.push(key);
      }
    }
    return rs;
  }
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true
    });
  }
  showError(msg: string) {
    this.toastrService.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  onBackClicked() {
    if (this.isEditing) {
      this.isEditing = false;
    } else this.location.back();
  }
}
