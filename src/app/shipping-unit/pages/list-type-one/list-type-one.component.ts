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
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-list-type-one',
  templateUrl: './list-type-one.component.html',
  styleUrls: ['./list-type-one.component.css']
})
export class ListTypeOneComponent implements OnInit {
  title: string = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
  isEditing: boolean = false;
  now: Date = new Date('2022/01/01');
  ca_no_option: string = 'Ca 1';

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
    this.getData();
  }
  getData() {
    this.wareHouseService
      .getConfirmProduct(Utils.formatDate(this.now), Utils.formatDate(this.now))
      .subscribe(data => {
        console.log(data);

        this.setOptionData(data);
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

  setOptionData(data: any) {
    let currentShifts: ProductConfirm[] = [];
    for (const _data of data) {
      currentShifts.push(new ProductConfirm(_data));
    }
    const selectShift = currentShifts.filter(item => {
      return item.nameShift.toLowerCase() == this.ca_no_option.toLowerCase();
    });

    if (selectShift.length > 0) {
      currentShifts = selectShift
        .filter(
          item =>
            item.nameShift.toLowerCase() === this.ca_no_option.toLowerCase()
        )
        .sort(
          (a, b) =>
            parseInt(a.option.split(' ')[1]) - parseInt(b.option.split(' ')[1])
        );

      let options: OptionDetail[] = [];
      for (let i = 0; i <= this.getQtyOption(currentShifts) - 1; i++) {
        // const stringOpt = 'option ' +i
        const stringOpt = this.getOptions(currentShifts)[i];
        console.log(stringOpt);

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

        options.push(optionObj);
      }
      console.log(options);

      this.aOptionShiftList = options;
    } else {
      this.aOptionShiftList = [];
      this.isEditing = false;
      this.inputs_options = [];
      this.showError('Chưa có dữ liệu!');
    }
  }
  getQtyOption(shifts: ProductConfirm[]): number {
    let numOption: any = [];

    let options = shifts.map(item => item.option);

    numOption = [...new Set(options)].length;
    return numOption;
  }
  getOptions(shifts: ProductConfirm[]): any {
    let options = shifts.map(item => item.option.toLowerCase());
    return [...new Set(options)];
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
        machine.idShiftDetail = this.optionEditing.idShiftDetail + '';
        machine.codeEquipment = key.split('_')[1].toUpperCase();
        machine.quantity = this.optionForm.value[key];

        machine_list.push(machine);
      }
      // add other shift
      const otherOption = this.getOtherDataShift(
        this.optionEditing.idShiftDetail
      );
      for (const option of otherOption) {
        for (const machineOpt of option.machine_list) {
          let _machine: ConfirmProduction1000 = new ConfirmProduction1000();
          _machine.idShiftDetail = option.idShiftDetail + '';
          _machine.codeEquipment = machineOpt.code;
          _machine.quantity = machineOpt.qty;

          machine_list.push(_machine);
        }
      }

      dataInput.user = this.authService.getUser().id;
      dataInput.data = machine_list;
      dataInput.date = Utils.formatDate(this.now);
      dataInput.nameShift = this.ca_no_option.toUpperCase();

      console.log(dataInput);
      this.wareHouseService.update1000Kg(dataInput).subscribe(reply => {
        console.log(reply);
        if (reply.state == ResponseState.SUCCESS) {
          this.isEditing = false;
          this.inputs_options = [];
          this.title = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
          this.showSuccess('Cập nhật thành công');
          this.getData();
        }
      });
    }
  }

  getOtherDataShift(idShiftDetail: number): OptionDetail[] {
    return this.aOptionShiftList.filter(
      item => item.idShiftDetail !== idShiftDetail
    );
  }
  onShiftOptionClicked = (option: any) => {
    this.optionEditing = option;
    this.initForm(option.machine_list);

    // get & set data to input control
    for (let i = 0; i < option.machine_list.length; i++) {
      this.optionForm
        .get(this.getKeyForm()[i])
        .setValue(option.machine_list[i].qty);
    }

    this.isEditing = true;
    this.title = 'Chỉnh sửa thông tin nhập đóng mới (lại)';
  };
  onDateValueChanged(e: any) {
    this.getData();
  }
  onSelectShiftChange = (e: any) => {
    this.getData();
  };

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
      this.inputs_options = [];
      this.title = 'Danh sách sản lượng ghi nhận đóng bao loại 1 tấn';
    } else this.location.back();
  }
}
