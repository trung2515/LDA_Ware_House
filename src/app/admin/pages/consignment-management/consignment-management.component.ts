import { AuthService } from 'src/app/core/services/auth.service';
import { WareHouseService } from './../../../core/services/warehouse.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { tryEqualsArr } from './../../../utils/helper';
import { InputProductModel, ParcelDetailModel, ParcelModel } from './models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsignmentService } from 'src/app/admin/pages/consignment-management/consignment.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Utils from 'src/app/_lib/utils';

@Component({
  selector: 'app-consignment-management',
  templateUrl: './consignment-management.component.html',
  styleUrls: ['./consignment-management.component.css'],
})

export class ConsignmentManagementComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent


  ConsignmentWithTimeLine: any = []

  consignments: ParcelModel[] = []

  products: any = [
    {
      name: 'Alumin 50Kg',
      code: 'AO50KG'
    },
    {
      name: 'Alumin 1 Tan',
      code: 'AO1T'
    }
  ]

  product_types: any = [

  ]

  bag_types: any = [

  ]
  // other setting of option dxi
  searchModeOption = 'contains';
  searchExprOption: any = 'Name';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;

  idConsignmentForm: any

  confirmPopupVisible: boolean = false
  // popup edit
  popupVisible: boolean = false;
  popupTitle: string = ''
  closeButtonOptions: any;
  saveReplace: any;
  currentConsignment: any = {}
  consigmentDetail: ParcelDetailModel[] = []

  // popup addNew
  popupCreatorTitle: string = 'Thêm mới lô hàng'
  popupCreatorVisible: boolean = false
  closePopupCreator: any;
  addConsignment: any;

  inputProductPopupCreator: InputProductModel[] = []

  currentProducts: any = []
  idConsignment: number = 0;
  currentDate: any = new Date()

  showPopupCreateConsignment() {
    this.popupCreatorVisible = true;
    this.inputProductPopupCreator = []
  }
  showInfo(consignment: ParcelModel) {
    this.popupVisible = true;
    if (consignment != null) {
      this.popupTitle = `Chi tiết lô hàng #${consignment.id}`
      this.warehouseService.getListParcelDetailByCode(consignment.name).subscribe(data => {
        this.consigmentDetail = data.map(d => new ParcelDetailModel(d))
      })
    }

  }

  setIdConsignment(e: any) {
    this.idConsignment = Number(e.target.value)
  }
  addNewConsignment() {
    let newConsignment: any = {}
    const now = `${this.currentDate.getMonth() + 1}/${this.currentDate.getDate()}/${this.currentDate.getFullYear()}`
    if (this.idConsignment) {
      this.inputProductPopupCreator.forEach(item => {
        item['hasProduced'] = 0
        item['status'] = 'Mới'
      })
      newConsignment = {
        id: this.idConsignment,
        date: now,
        creator: this.authService.getUser().user,
        products: [...this.inputProductPopupCreator]
      }
      this.consignments.push(newConsignment)
    }
  }

  filterForm: FormGroup = new FormGroup({})

  constructor(private consignmentService: ConsignmentService,
    private warehouseService: WareHouseService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    const that = this;

    that.closePopupCreator = {
      text: 'Đóng',
      onClick() {
        that.popupCreatorVisible = false;
      }
    }
    that.addConsignment = {
      text: 'Thêm mới',
      onClick() {
        that.addNewConsignment()
        that.popupCreatorVisible = false;

      }
    };

  }
  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      id: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]+$/i)
        ])
      ]
    })
    this.getData(this.currentDate.getFullYear(), this.currentDate.getMonth())
  }

  getData(year: number, month: number) {
    var date = new Date(year, month, 1)
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    this.warehouseService.getListParcel(Utils.formatDate(firstDay), Utils.formatDate(lastDay)).subscribe(data => {
      this.consignments = data.map(d => new ParcelModel(d))
      console.log(this.consignments)
    })
  }
  onSubmit(): void {
    console.log(this.filterForm);
  }

  // confirm popup
  onCloseConfirm() {
    this.confirmPopupVisible = false;
    this.popupVisible = false
  }

  onConfirm() {
    // const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)
    // this.consignments[currentIndexCon].products = [...this.currentProducts]
    this.confirmPopupVisible = false
  }

  onClosePopupPr(e: any) {
    const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)
    const checkReplace = tryEqualsArr(this.consignments[currentIndexCon].products, this.currentProducts)
    if (checkReplace) {
      this.popupVisible = false
    } else {
      this.confirmPopupVisible = true
    }

  }
  onSaveReplace = () => {
    // this.confirmPopupVisible = true
    const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)

    const checkReplace = tryEqualsArr(this.consignments[currentIndexCon].products, this.currentProducts)
    if (checkReplace) {
      this.popupVisible = false
    } else {
      this.confirmPopupVisible = true
    }
  }
  onClickSave(e: any) {
    this.dataGrid.instance.saveEditData();
    this.currentProducts[(this.currentProducts.length - 1)].hasProduced = 0
    this.currentProducts[(this.currentProducts.length - 1)].status = 'Mới'
  }
  onClickCancel(e: any) {
    this.dataGrid.instance.cancelEditData();
  }
  onFilterChange(e: any) {

  }
  //handle dx-date-box change event
  onValueChanged(e: any) {
    const year = (new Date(e.value)).getFullYear()
    const month = e.value.getMonth()
    this.getData(year, month)
  }


}

