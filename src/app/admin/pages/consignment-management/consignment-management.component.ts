import { ProductInfo, ResponseState } from './../../../core/models/model.pb';
import { AuthService } from 'src/app/core/services/auth.service';
import { WareHouseService } from './../../../core/services/warehouse.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { tryEqualsArr } from './../../../utils/helper';
import { InputProductModel, OptionModel, ParcelDetailModel, ParcelModel } from './models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsignmentService } from 'src/app/admin/pages/consignment-management/consignment.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Utils from 'src/app/_lib/utils';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consignment-management',
  templateUrl: './consignment-management.component.html',
  styleUrls: ['./consignment-management.component.css'],
})

export class ConsignmentManagementComponent implements OnInit {

  @ViewChild('#dataGrid') dataGrid!: DxDataGridComponent
  @ViewChild('detailGrid') detailGrid!: DxDataGridComponent

  ConsignmentWithTimeLine: any = []
  rawData: ParcelModel[] = []
  consignments: ParcelModel[] = []

  products: OptionModel[] = []
  product_types: OptionModel[] = []
  bag_types: OptionModel[] = []

  new_parcel_name: string = ''

  // other setting of option dxi
  searchModeOption = 'contains';
  searchExprOption: any = 'Name';
  searchTimeoutOption = 200;
  minSearchLengthOption = 0;

  idConsignmentForm: any

  confirmPopupVisible: boolean = false
  // popup edit
  popupVisible: boolean = false;
  isEditParcel: boolean = false;
  popupTitle: string = ''
  closeButtonOptions: any;
  saveReplace: any;
  currentConsignment: ParcelModel = new ParcelModel()
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
      this.isEditParcel = true;
      this.popupTitle = `Chi tiết lô hàng #${consignment.name}`
      this.warehouseService.getListParcelDetailByCode(consignment.name).subscribe(data => {
        this.consigmentDetail = data.map(d => new ParcelDetailModel(d))
      })
      this.currentConsignment = this.consignments.filter(c => c.id == consignment.id)[0]
    } else {
      this.new_parcel_name = '';
      this.isEditParcel = false;
      this.popupTitle = 'Thêm mới lô hàng'
      this.consigmentDetail = []
      this.currentConsignment.date = new Date().toString()
      this.currentConsignment.createdBy = this.authService.getUser().id
      this.currentConsignment.createdPerson = this.authService.getUser().user

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
    private authService: AuthService,
    private adminService: AdminService,
    private toastr: ToastrService
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

  initFilter() {
    forkJoin([this.adminService.getListProduct(), this.adminService.getListTypeProduct(), this.adminService.getListTypePacket()])
      .subscribe(([products, productTypes, typePacet]) => {
        this.products = products.filter(p => !p.nameProduct.includes("50")).map(p => new OptionModel(p))
        this.product_types = productTypes.map(p => new OptionModel(p))
        this.bag_types = typePacet.filter(p => !p.nameTypePacket.includes("50")).map(p => new OptionModel(p))
      })
  }

  ngOnInit(): void {
    this.initFilter()
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
      this.rawData = this.consignments
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

  onClosePopupPr = () => {
    this.popupVisible = false
  }
  onSaveReplace = () => {
    this.confirmPopupVisible = true
    if (confirm('Bạn có chắc chắn xác nhận thay đổi?')) {
      console.log(this.currentConsignment)
      console.log(this.consigmentDetail)
      if (this.isEditParcel == true) {
        this.warehouseService.updateParcel(this.currentConsignment, this.consigmentDetail).subscribe(
          (reply) => {
            if (reply.state == ResponseState.SUCCESS) {
              this.toastr.success(reply.message)
              this.popupVisible = false
              this.getData(this.currentDate.getFullYear(), this.currentDate.getMonth())
            } else {
              this.toastr.error(reply.message)
            }
          }
        )
      } else {
        this.currentConsignment.name = this.new_parcel_name;
        this.warehouseService.insertParcel(this.currentConsignment, this.consigmentDetail).subscribe(
          (reply) => {
            if (reply.state == ResponseState.SUCCESS) {
              this.toastr.success(reply.message)
              this.popupVisible = false
              this.getData(this.currentDate.getFullYear(), this.currentDate.getMonth())
            } else {
              this.toastr.error(reply.message)
            }
          }
        )
      }
    }
  }
  onClickSave = () => {
    console.log(this.detailGrid)
    this.detailGrid.instance.saveEditData();
    this.consigmentDetail[(this.consigmentDetail.length - 1)].status = 'Mới'
    this.consigmentDetail[(this.consigmentDetail.length - 1)].code_product_type = 1
    this.consigmentDetail[(this.consigmentDetail.length - 1)].quantity = '0'

    // this.currentProducts[(this.currentProducts.length - 1)].hasProduced = 0
    // this.currentProducts[(this.currentProducts.length - 1)].status = 'Mới'
  }
  onClickCancel = () => {
    this.detailGrid.instance.cancelEditData();
  }
  onFilterChange(e: any) {
    console.log(e.value)
    this.consignments = this.rawData.filter(c => c.name.includes(e.value))
  }
  //handle dx-date-box change event
  onValueChanged(e: any) {
    const year = (new Date(e.value)).getFullYear()
    const month = e.value.getMonth()
    this.getData(year, month)
  }


}

