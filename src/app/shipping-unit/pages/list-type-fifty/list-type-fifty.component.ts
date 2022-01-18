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
  now: Date = new Date('1/1/2022');
  popupVisible: boolean = false;
  isUpdating: Boolean = false;
  optionSelected: any;

  productList: Option50Modal[] = [];
  typeProductList: Option50Modal[] = [];
  typePacketList: Option50Modal[] = [];
  warehouseList: Option50Modal[] = [];
  ballot_types: Option50Modal[] = [];
  parcelList: Option50Modal[] = [];
  packaging_units: Option50Modal[] = [];

  ballot_type: string = '';
  packaging_unit = '';
  ca_no_option: string = 'Ca 1';

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
      this.setListOption();
    });
    this.adminService.getListTypeBill().subscribe(data => {
      this.ballot_types = data.map(d => new Option50Modal(d));
      this.setListOption();
    });
    this.warehouseService.getListAllParcel().subscribe(data => {
      this.parcelList = data.map(d => new Option50Modal(d));
      this.setListOption();
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
  onUpdateData() {
    if (this.isValidForm()) {
      const userNameCur =
        this.card50kgList[0]?.creator || this.authService.getUser().user;

      const data: InsertCardRequest = new InsertCardRequest();
      data.date = Utils.formatDate(this.now);
      data.nameShift = this.ca_no_option.toUpperCase();
      data.user = userNameCur;
      data.codePackingUnit = this.packaging_unit;
      data.codeTypeBill = this.ballot_type;

      for (const key of this.getKeyForm()) {
        const valueForm = this.formGroupProduct[key].value;
        const cardDetail: CardDetailInfo = new CardDetailInfo();

        cardDetail.codeProduct = this.optionSelected.product_code;
        cardDetail.idTypeProduct = this.optionSelected.product_type;
        cardDetail.codeTypePacket = this.optionSelected.code_bag_type;
        cardDetail.quantity = valueForm.qty;
        cardDetail.codeParcel = this.optionSelected.parcel;
        cardDetail.codeWareHouse = this.optionSelected.codeWarehouse;
        cardDetail.codeTypeBill = this.ballot_type;
        cardDetail.codePackingUnit = this.packaging_unit;
        cardDetail.idCard = this.optionSelected.idCard;

        data.cardDetails.push(cardDetail);
      }
      const otherItem = this.getOtherDataShift(this.optionSelected.idCard);
      data.cardDetails = data.cardDetails.concat(otherItem);

      if (
        this.formGroupProduct['form-1'].value['qty'] !== this.optionSelected.qty
      ) {
        // console.log(data);
        this.warehouseService.updateCard50kg(data).subscribe(reply => {
          if (reply.state === ResponseState.SUCCESS) {
            this.showSuccess('Cập nhật thành công');
            this.getData();
          } else {
            this.showWarn(reply.message);
          }
        });
      } else this.showSuccess('Cập nhật thành công');
      this.isUpdating = false;
    }
  }
  getOtherDataShift(idCard: string): CardDetailInfo[] {
    let rs: CardDetailInfo[] = [];
    this.card50kgList.forEach(item => {
      if (item.idCard !== idCard) {
        const cardDetail: CardDetailInfo = new CardDetailInfo();

        cardDetail.codeProduct = item.product_code;
        cardDetail.idTypeProduct = Number(item.product_type);
        cardDetail.codeTypePacket = item.code_bag_type;
        cardDetail.quantity = item.qty + '';
        cardDetail.codeParcel = item.parcel;
        cardDetail.codeWareHouse = item.codeWarehouse;
        cardDetail.codeTypeBill = item.ballot_type;
        cardDetail.codePackingUnit = item.packing_unit;
        cardDetail.idCard = item.idCard;

        rs.push(cardDetail);
      }
    });
    return rs;
  }
  onOptionEditClicked(option: any) {
    this.optionSelected = option;
    this.ballot_type = option.code_ballot_type;
    this.packaging_unit = option.packing_unit;
    const _option: CardDetailInfo = new CardDetailInfo();
    _option.idCard = option.idCard;

    this.formGroupProduct = {};
    this.formGroupProduct['form-1'] = this.initFormGroup(option);

    this.isUpdating = true;
  }
  onOptionDeleteClicked(option: any) {
    this.popupVisible = true;
    // console.log(option);
    this.optionSelected = option;
  }
  onClosePopup = () => {
    this.popupVisible = false;
  };
  onConfirm = () => {
    this.warehouseService
      .deleteCard50kg(this.optionSelected.idCard)
      .subscribe(reply => {
        // console.log(reply);
        if (reply.state === ResponseState.SUCCESS) {
          this.toastrService.success('Xoá thành công', '');
          this.getData();
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
      product_name: [
        { value: option?.product_code || '', disabled: true },
        [Validators.required]
      ],
      product_type: [
        { value: option?.product_type || '', disabled: true },
        [Validators.required]
      ],
      bag_type: [
        { value: option?.code_bag_type || '', disabled: true },
        [Validators.required]
      ],
      qty: [
        option?.qty || '0',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      consignments: [
        { value: option?.parcel || '', disabled: true },
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      warehouse: [
        { value: option?.codeWarehouse || '', disabled: true },
        [Validators.required]
      ]
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
