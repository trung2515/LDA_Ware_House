import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Appointment, ShiftDetail } from 'src/app/admin/pages/shift/model';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import { AdminService } from 'src/app/core/services/admin.service';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-add-packaging-fifty',
  templateUrl: './add-packaging-fifty.component.html',
  styleUrls: ['./add-packaging-fifty.component.css']
})
export class AddPackagingFiftyComponent implements OnInit {
  title: string = 'Nhập sản lượng đóng bao loại 50kg';
  now: Date = new Date();
  ca_no_option: string = 'Ca 1';
  ballot_type: string = 'Nhập đóng mới';
  packaging_units: any = ['VTRE', 'VTR'];
  packaging_unit = 'VTRE';

  appointments: Appointment[] = [];
  currentAppointment: Appointment = {
    id: 0,
    text: '',
    shift: 0,
    startDate: undefined,
    endDate: undefined,
    description: '',
    shiftDetail: []
  };
  inputs_options: any = [
    {
      label: 'Sản phẩm',
      formControlName: 'product_name',
      type: 'select',
      options: ['Alumin 50kg', 'Hydrat 50kg']
    },
    {
      label: 'Loại sản phẩm',
      formControlName: 'product_type',
      type: 'select',
      options: ['Loại 1', 'Loại 2']
    },
    {
      label: 'Loại bao',
      formControlName: 'bag_type',
      type: 'select',
      options: ['Đáy liền', 'Đáy bằng']
    },
    { label: 'Số lượng', formControlName: 'qty', type: 'text' },
    { label: 'Lô', formControlName: 'consignments', type: 'text' },
    {
      label: 'Kho',
      formControlName: 'warehouse',
      type: 'select',
      options: ['Kho TT', 'Kho TT 1']
    }
  ];
  formGroupProduct: any = {};
  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private shiftService: ShiftService
  ) {}

  ngOnInit(): void {
    this.appointments = this.shiftService.getAppointments();
    // this.getData()

    for (let i = 1; i < 2; i++) {
      this.formGroupProduct['form' + i] = this.initFormGroup();
    }
  }
  onSubmit() {
    const isValid = this.isValidForm();
    if (isValid) {
      const currentIndex = this.appointments.findIndex(
        item => item.id === this.currentAppointment.id
      );
      const shiftDetailProducts = [...this.currentAppointment.shiftDetail];

      if (shiftDetailProducts) {
        for (const key of this.getKeyForm()) {
          const form = this.formGroupProduct[key].value;

          let _shiftDetail: ShiftDetail = {
            id: shiftDetailProducts.length + 1,
            option: (shiftDetailProducts.length + 1).toString(),
            type: this.ballot_type === 'Nhập đóng mới' ? 'NDM' : 'NDL',
            product: form.product_name,
            productRange: form.product_type,
            packaging: form.bag_type,
            lot: form.consignments,
            machines_packaging: '',
            unit: this.packaging_unit,
            wareHouse: form.wareHouse
          };
          shiftDetailProducts.push(_shiftDetail);
        }
      }
      this.appointments[currentIndex].shiftDetail = shiftDetailProducts;
      this.showSuccess('Thêm thành công!');
    }
  }
  isValidForm = () => {
    for (const key of this.getKeyForm()) {
      const form = this.formGroupProduct[key];
      if (!form.valid) {
        for (const key in form.controls) {
          if (form.controls.hasOwnProperty(key)) {
            const control: FormControl = <FormControl>form.controls[key];
            control.markAsTouched();
          }
        }
        return false;
      }
    }
    return true;
  };
  initFormGroup() {
    return this.formBuilder.group({
      product_name: ['', [Validators.required]],
      product_type: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bag_type: ['', [Validators.required]],
      qty: ['123', [Validators.required, Validators.pattern('^[0-9]*$')]],
      consignments: [
        '321',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      warehouse: ['', [Validators.required]]
    });
  }
  getData() {
    this.adminService
      .getListShiftDetail('2021-12-01', Utils.formatDate(new Date()))
      .subscribe(data => {
        this.appointments = data.map(d => new Appointment(d));
        this.appointments.sort((a, b) => a.shift - b.shift);
      });
  }
  addNewForm() {
    const sumForm = this.getKeyForm().length;

    const form = this.initFormGroup();
    this.formGroupProduct['form' + (sumForm + 1)] = form;
  }
  getKeyForm() {
    let result = [];
    for (const key in this.formGroupProduct) {
      if (Object.prototype.hasOwnProperty.call(this.formGroupProduct, key)) {
        result.push(key);
      }
    }
    return result;
  }
  onDateValueChanged(e: any) {
    const _currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(e.value),
      this.getCurrentShift(this.ca_no_option)
    );
    if (_currentAppointment) {
      this.currentAppointment = _currentAppointment;
    } else {
      this.showError('Chưa có dữ liệu ca này!');
    }
  }
  onSelectShiftChange = (e: any) => {
    const _currentAppointment = this.getCurrentAppointment(
      this.getCurrentDate(this.now),
      this.getCurrentShift(e.selectedItem)
    );
    if (_currentAppointment) {
      this.currentAppointment = _currentAppointment;
    } else {
      this.showError('Chưa có dữ liệu ca làm việc này!');
    }
  };
  getCurrentShift(ca_option: string) {
    return Number(ca_option.split(' ')[1]);
  }
  getCurrentAppointment(date: string, ca_no?: number) {
    return this.appointments.find(appointment => {
      const { startDate, shift } = appointment;
      const currentDate = this.getCurrentDate(startDate);
      return currentDate === date && shift === ca_no;
    });
  }
  getCurrentDate(date: Date): string {
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
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
    this.location.back();
  }
}
