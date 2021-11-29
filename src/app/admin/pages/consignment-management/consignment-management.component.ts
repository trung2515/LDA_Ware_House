import { InputProductModel, ParcelModel } from './models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsignmentService } from 'src/app/core/services/consignment.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consignment-management',
  templateUrl: './consignment-management.component.html',
  styleUrls: ['./consignment-management.component.css'],
})

export class ConsignmentManagementComponent implements OnInit {

  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent


  ConsignmentWithTimeLine: any = []

  consignments: ParcelModel[] = []
  // name type type_bag
  infoSelection: any =
    {
      name: [{ Value: 'Alumin 1 tấn' }, { Value: 'Alumin 2 tấn' }, { Value: 'Alumin 3 tấn' }, { Value: 'Alumin 30000 tấn' }],
      type: [{ Value: 1, Key: 'Loại 1' }, { Value: 2, Key: 'Loại 2' }],
      type_bag: [{ Value: 'Xả đáy nhiều lần 3.7' }, { Value: 'Đáy liền' }, { Value: 'Bao alumin 50kg' }],
      quantity: [1000, 1000, 900]
    }
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
  showInfo(consignment: any) {
    this.popupVisible = true;
    this.popupTitle = `Chi tiết đơn hàng #${consignment.id}`

    this.currentConsignment = { ...consignment }
    this.currentProducts = [...this.currentConsignment.products]
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
        creator: 'hieu',
        products: [...this.inputProductPopupCreator]
      }
      this.consignments.push(newConsignment)
      this.ConsignmentWithTimeLine = this.getConsignInThreeMonthRecently(this.consignments)
    }
  }

  filterForm: FormGroup = new FormGroup({})


  constructor(private consignmentService: ConsignmentService, private formBuilder: FormBuilder) {

    const that = this;
    that.consignments = consignmentService.getConsignment()

    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickSave = this.onClickSave.bind(this);


    this.onClosePopupPr = this.onClosePopupPr.bind(this);
    this.onSaveReplace = this.onSaveReplace.bind(this);

    this.onConfirm = this.onConfirm.bind(this);
    this.onCloseConfirm = this.onCloseConfirm.bind(this)

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
    this.ConsignmentWithTimeLine = this.getConsignInThreeMonthRecently(this.consignments)
    this.filterForm = this.formBuilder.group({
      id: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[0-9]+$/i)
        ])
      ]
    })
  }
  onSubmit(): void {
    console.log(this.filterForm);
  }

  // confirm popup
  onCloseConfirm() {
    this.confirmPopupVisible = false;
    this.popupVisible =  false
  }

  onConfirm() {
    const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)
    this.consignments[currentIndexCon].products = [...this.currentProducts]
    this.confirmPopupVisible = false
  }

  onClosePopupPr(e: any) {
    const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)

    const checkReplace = this.tryEqualsArr(this.consignments[currentIndexCon].products, this.currentProducts)
    if (checkReplace) {
      this.popupVisible = false
    } else {
      this.confirmPopupVisible = true
    }

  }
  onSaveReplace = () => {
    // this.confirmPopupVisible = true
    const currentIndexCon = this.consignments.findIndex((con: any) => con.id === this.currentConsignment.id)

    const checkReplace = this.tryEqualsArr(this.consignments[currentIndexCon].products, this.currentProducts)
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
    if (e.target.value)
      this.ConsignmentWithTimeLine = this.getConsignInThreeMonthRecently(this.consignments, '2021', Number(e.target.value))
  }
  //handle dx-date-box change event
  onValueChanged(e: any) {
    const year = (new Date(e.value)).getFullYear()
    this.ConsignmentWithTimeLine = this.getConsignInThreeMonthRecently(this.consignments, String(year))
  }
  getConsignmentListByTImeLine(consignments: any, yearSelect?: string, keyWords?: number) {
    const currentYear = new Date().getFullYear()
    let output = []
    let monthYear = ''

    if (!keyWords) {
      for (let i = 1; i > -2; i--) {
        monthYear = (new Date().getMonth() + i) + '/' + (yearSelect || currentYear)
        const result = consignments.filter((consignment: any) => {
          const created_at = new Date(consignment.date)
          let stringDate = (created_at.getMonth() + 1) + '/' + created_at.getFullYear()
          return stringDate === monthYear
        })
        output.push({
          time_line: monthYear,
          consignments: [...result],
        })
      }
      return output
    }
    for (let i = 1; i > -2; i--) {
      monthYear = (new Date().getMonth() + i) + '/' + (yearSelect || currentYear)
      const result = consignments.filter((consignment: any) => {
        const created_at = new Date(consignment.date)
        let stringDate = (created_at.getMonth() + 1) + '/' + created_at.getFullYear()
        return (stringDate === monthYear) && consignment.id === keyWords
      })
      output.push({
        time_line: monthYear,
        consignments: [...result],
      })
    }
    return output
  }
  getConsignInThreeMonthRecently(consignments: any, yearSelect?: string, keyWords?: number) {
    if (keyWords) {
      return this.getConsignmentListByTImeLine(consignments, yearSelect, keyWords)
    }
    return this.getConsignmentListByTImeLine(consignments, yearSelect)
  }
  // check 2 arrays are same
  tryEqualsArr = function (arrayA: any[], arrayB: any[]) {
    // if the other array is a falsy value, return
    if (!arrayA)
      return false;

    // compare lengths - can save a lot of time
    if (arrayA.length != arrayB.length)
      return false;

    for (var i = 0, l = arrayA.length; i < l; i++) {
      // Check if we have nested arrays
      if (arrayA[i] instanceof Array && arrayB[i] instanceof Array) {
        // recurse into the nested arrays
        if (!arrayA[i].equals(arrayB[i]))
          return false;
      }
      else if (arrayA[i] != arrayB[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  }
}
