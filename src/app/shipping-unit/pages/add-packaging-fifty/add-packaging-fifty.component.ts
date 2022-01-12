import { Option50Modal } from './../model';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import { AdminService } from 'src/app/core/services/admin.service';
import Utils from 'src/app/_lib/utils';

import {
  CardDetailInfo,
  InsertCardRequest,
  ResponseState
} from 'src/app/core/models/model.pb';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-packaging-fifty',
  templateUrl: './add-packaging-fifty.component.html',
  styleUrls: ['./add-packaging-fifty.component.css']
})
export class AddPackagingFiftyComponent implements OnInit {
  title: string = 'Nhập sản lượng đóng bao loại 50kg';
  now: Date = new Date('1/1/2022');
  ca_no_option: string = 'Ca 1';
  ballot_types: Option50Modal[] = [];
  ballot_type: string = 'NDM';
  packaging_units: Option50Modal[] = [];
  packaging_unit = 'VTRE';

  productList: Option50Modal[] = [];
  typeProductList: Option50Modal[] = [];
  typePacketList: Option50Modal[] = [];
  warehouseList: Option50Modal[] = [];
  parcelList: Option50Modal[] = [];

  listProduct: any = [];
  inputs_options: any = [];
  formGroupProduct: any = {};

  cardListDetail: any = [];

  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private shiftService: ShiftService,
    private warehouseService: WareHouseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getDataSelect();

    for (let i = 1; i < 2; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup();
    }
  }
  getData() {
    this.warehouseService
      .getListCar50kg(Utils.formatDate(this.now), Utils.formatDate(this.now))
      .subscribe(data => {
        console.log(data);
      });
  }
  onSubmit() {
    console.log(this.formGroupProduct['form-1'].value);

    if (this.isValidForm()) {
      this.handleUpdate50kg();
    }
  }
  handleUpdate50kg() {
    const data: InsertCardRequest = new InsertCardRequest();
    data.date = Utils.formatDate(this.now);
    data.nameShift = this.ca_no_option;
    data.user = this.authService.getUser().id;
    data.codeTypeBill = this.ballot_type
    data.codePackingUnit = this.packaging_unit

    for (const key of this.getKeyForm()) {
      const valueForm = this.formGroupProduct[key].value;

      const cardDetail: CardDetailInfo = new CardDetailInfo();
      // cardDetail.namePerson = this.authService.getUser().user;
      // cardDetail.createdPerson =this.authService.getUser().user;

      cardDetail.codeProduct = valueForm.product_code;
      cardDetail.idTypeProduct = valueForm.product_type_code;
      cardDetail.codeTypePacket = valueForm.bag_type_code;
      cardDetail.quantity = valueForm.qty;
      cardDetail.codeParcel = valueForm.consignments;
      cardDetail.codeWareHouse = valueForm.warehouse;
      cardDetail.codeTypeBill = this.ballot_type;
      cardDetail.codePackingUnit = this.packaging_unit;

      data.cardDetails.push(cardDetail);
    }

    console.log(data);


    this.warehouseService.insertCard50kg(data).subscribe(reply => {
      console.log(reply);
      if (reply.state == ResponseState.SUCCESS) {
        this.showSuccess('Thêm mới thành công');
      } else {
        this.showWarn(reply.message);
      }
    });
  }
  getDataSelect() {
    this.adminService.getListProduct().subscribe(data => {
      this.productList = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.adminService.getListTypeProduct().subscribe(data => {
      // console.log('type product ', data);
      this.typeProductList = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.adminService.getListTypePacket().subscribe(data => {

      this.typePacketList = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.adminService.getListWareHouse().subscribe(data => {
      this.warehouseList = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.adminService.getListPackingUnit().subscribe(data => {
      this.packaging_units = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.adminService.getListTypeBill().subscribe(data => {
      this.ballot_types = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
    this.warehouseService.getListAllParcel().subscribe(data => {
      this.parcelList = data.map(d => new Option50Modal(d));
      this.setOptionList();
    });
  }
  // ah50kg
  setOptionList() {
    this.inputs_options = [
      {
        label: 'Sản phẩm',
        formControlName: 'product_code',
        type: 'select',
        options: this.productList.filter(i =>
          i?.code.toLowerCase().includes('50kg')
        )
      },
      {
        label: 'Loại sản phẩm',
        formControlName: 'product_type_code',
        type: 'select',
        options: this.typeProductList
      },
      {
        label: 'Loại bao',
        formControlName: 'bag_type_code',
        type: 'select',
        options: this.typePacketList.filter(i =>
          i?.code.toLowerCase().includes('50')
        )
      },
      { label: 'Số lượng', formControlName: 'qty', type: 'text' },
      {
        label: 'Lô',
        formControlName: 'consignments',
        type: 'select',
        options: this.parcelList
      },
      {
        label: 'Kho',
        formControlName: 'warehouse',
        type: 'select',
        options: this.warehouseList
      }
    ];
  }

  isValidForm(): Boolean {
    let isValid = true;
    for (const key of this.getKeyForm()) {
      const form = this.formGroupProduct[key];
      if (!form.valid) {
        for (const key in form.controls) {
          if (form.controls.hasOwnProperty(key)) {
            const control: FormControl = <FormControl>form.controls[key];
            control.markAsTouched();
          }
        }
        isValid = false;
      } else isValid = true;
    }
    return isValid;
  }
  initFormGroup(): FormGroup {
    return this.formBuilder.group({
      product_code: ['', [Validators.required]],
      product_type_code: ['', [Validators.required]],
      bag_type_code: ['', [Validators.required]],
      qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      consignments: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      warehouse: ['', [Validators.required]]
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
    this.getData();
  }
  onSelectShiftChange = (e: any) => {
    this.getData();
  };
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true
    });
  }
  showWarn(msg: string) {
    this.toastrService.warning(msg, '', {
      timeOut: 3000,
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
