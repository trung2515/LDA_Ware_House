import { AuthService } from './../../../core/services/auth.service';
import { Option50Modal } from './../model';
import { WareHouseService } from 'src/app/core/services/warehouse.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/admin/pages/shift/model';
import { ToastrService } from 'ngx-toastr';
import { ShiftService } from 'src/app/admin/pages/shift/services/shift.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { Card50kgDetailModel } from '../model';
import Utils from 'src/app/_lib/utils';
import {
  CardDetailInfo,
  InsertCardRequest,
  ResponseState
} from 'src/app/core/models/model.pb';

@Component({
  selector: 'app-list-type-fifty',
  templateUrl: './list-type-fifty.component.html',
  styleUrls: ['./list-type-fifty.component.css']
})
export class ListTypeFiftyComponent implements OnInit {
  title: String = 'Danh sách sản lượng đóng bao loại 50kg';
  now: Date = new Date('2022/01/01');
  ca_no_option: string = 'Ca 1';
  popupVisible: boolean = false;
  isUpdating: Boolean = false;
  optionSelected: any;
  productList: Option50Modal[] = [];
  typeProductList: Option50Modal[] = [];
  typePacketList: Option50Modal[] = [];
  warehouseList: Option50Modal[] = [];
  ballot_types: Option50Modal[] = [];
  ballot_type: string = '';
  packaging_units: Option50Modal[] = [];
  packaging_unit = '';

  card50kgList: Card50kgDetailModel[] = [];

  inputs_options: any = [
    {
      label: 'Sản phẩm',
      formControlName: 'product_name',
      type: 'select',
      options: this.productList
    },
    {
      label: 'Loại sản phẩm',
      formControlName: 'product_type',
      type: 'select',
      options: this.typeProductList
    },
    {
      label: 'Loại bao',
      formControlName: 'bag_type',
      type: 'select',
      options: this.typePacketList
    },
    { label: 'Số lượng', formControlName: 'qty', type: 'text' },
    { label: 'Lô', formControlName: 'consignments', type: 'text' },
    {
      label: 'Kho',
      formControlName: 'warehouse',
      type: 'select',
      options: this.warehouseList
    }
  ];
  formGroupProduct: any = {};
  constructor(
    private location: Location,
    private toastrService: ToastrService,
    private shiftService: ShiftService,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private warehouseService: WareHouseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.getDateSelectOption();
  }
  getData() {
    this.warehouseService
      .getListCar50kg(Utils.formatDate(this.now), Utils.formatDate(this.now))
      .subscribe(data => {
        const card50kgList = data.map(d => new Card50kgDetailModel(d));

        this.card50kgList = card50kgList.filter(
          card =>
            card.shift.toLowerCase() === this.ca_no_option.toLowerCase() &&
            card.created_at === Utils.formatDate(this.now)
        );
      });
  }
  getDateSelectOption() {
    this.adminService.getListProduct().subscribe(data => {
      this.productList = data.map(d => new Option50Modal(d));
      this.setListOption();
    });
    this.adminService.getListTypeProduct().subscribe(data => {
      this.typeProductList = data.map(d => new Option50Modal(d));
      this.setListOption();
    });
    this.adminService.getListTypePacket().subscribe(data => {
      this.typePacketList = data.map(d => new Option50Modal(d));
      this.setListOption();
    });
    this.adminService.getListWareHouse().subscribe(data => {
      this.warehouseList = data.map(d => new Option50Modal(d));
      this.setListOption();
    });
    this.adminService.getListPackingUnit().subscribe(data => {
      this.packaging_units = data.map(d => new Option50Modal(d));
    });
    this.adminService.getListTypeBill().subscribe(data => {
      this.ballot_types = data.map(d => new Option50Modal(d));
    });
  }

  setListOption() {
    this.inputs_options = [
      {
        label: 'Sản phẩm',
        formControlName: 'product_name',
        type: 'select',
        options: this.productList.filter(item =>
          item.code.toLowerCase().includes('50kg')
        ),
        value: this.optionSelected?.product_name
      },
      {
        label: 'Loại sản phẩm',
        formControlName: 'product_type',
        type: 'select',
        options: this.typeProductList,
        value: this.optionSelected?.product_type
      },
      {
        label: 'Loại bao',
        formControlName: 'bag_type',
        type: 'select',
        options: this.typePacketList,
        value: this.optionSelected?.bag_type
      },
      { label: 'Số lượng', formControlName: 'qty', type: 'text' },
      { label: 'Lô', formControlName: 'consignments', type: 'text' },
      {
        label: 'Kho',
        formControlName: 'warehouse',
        type: 'select',
        options: this.warehouseList
      }
    ];
  }
  onUpdateData() {
    if (this.isValidForm()) {
      const data: InsertCardRequest = new InsertCardRequest();
      data.date = Utils.formatDate(this.now);
      data.nameShift = this.ca_no_option;
      data.user = this.authService.getUser().id;

      for (const key of this.getKeyForm()) {
        const valueForm = this.formGroupProduct[key].value;

        const cardDetail: CardDetailInfo = new CardDetailInfo();
        cardDetail.codeProduct = valueForm.product_name;
        cardDetail.codeTypePacket = valueForm.product_type;
        cardDetail.codeTypePacket = valueForm.bag_type;
        cardDetail.quantity = valueForm.qty;
        cardDetail.codeParcel = valueForm.consignments;
        cardDetail.codeWareHouse = valueForm.warehouse;
        cardDetail.codeTypeBill = this.ballot_type;
        cardDetail.codePackingUnit = this.packaging_unit;
        cardDetail.idCard = this.optionSelected.idCard;

        data.cardDetails.push(cardDetail);
      }
      console.log(data);

      this.warehouseService.updateCard50kg(data).subscribe(reply => {
        console.log(reply);
        if (reply.state === ResponseState.SUCCESS) {
          this.showSuccess('Cập nhật thành công');
          this.getData();
        } else {
          this.showWarn(reply.message);
        }
      });

      this.isUpdating = false;
    }
  }
  onOptionEditClicked(option: any) {
    this.optionSelected = option;
    this.ballot_type = option.code_ballot_type;
    this.packaging_unit = option.packing_unit;
    const _option: CardDetailInfo = new CardDetailInfo();
    _option.idCard = option.idCard;
    _option.isChangable = true;

    this.warehouseService.setChangeableCard(_option).subscribe(reply => {
      console.log(reply);
    });

    for (let i = 1; i <= 1; i++) {
      this.formGroupProduct['form-' + i] = this.initFormGroup(option);
    }

    this.isUpdating = true;
  }
  onOptionDeleteClicked(option: any) {
    this.popupVisible = true;
    console.log(option);
    this.optionSelected = option;
  }
  onClosePopup = () => {
    this.popupVisible = false;
  };
  onConfirm = () => {
    this.warehouseService
      .deleteCard50kg(this.optionSelected.idCard)
      .subscribe(reply => {
        console.log(reply);
        if (reply.state === ResponseState.SUCCESS) {
          this.toastrService.success('Xoá thành công', '');
        } else {
          this.toastrService.warning(reply.message);
        }
      });
    this.popupVisible = false;
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
  addNewForm() {
    const sumForm = this.getKeyForm().length;
    const form = this.initFormGroup();
    this.formGroupProduct['form' + (sumForm + 1)] = form;
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
  getKeyForm() {
    let result = [];
    for (const key in this.formGroupProduct) {
      if (Object.prototype.hasOwnProperty.call(this.formGroupProduct, key)) {
        result.push(key);
      }
    }
    return result;
  }
  initFormGroup(option?: any): FormGroup {
    return this.formBuilder.group({
      product_name: [option?.product_code || '', [Validators.required]],
      product_type: ['1' || '', [Validators.required]],
      bag_type: [option?.code_bag_type || '', [Validators.required]],
      qty: [
        option?.qty || '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      consignments: [
        option?.parcel || '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      warehouse: [option?.codeWarehouse || '', [Validators.required]]
    });
  }
  showError(msg: string) {
    this.toastrService.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true
    });
  }
  showSuccess(msg: string) {
    this.toastrService.success(msg, '', {
      timeOut: 3000,
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
  onBackClicked() {
    if (this.isUpdating) {
      this.isUpdating = false;
    } else {
      this.location.back();
    }
  }
}
