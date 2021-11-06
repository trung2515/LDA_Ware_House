import { Component, OnInit } from '@angular/core';
import { ParcelInfo } from 'src/app/core/models/model.pb';
import { AdminService } from 'src/app/core/services/admin.service';
import { ParcelModel, ParcelModelDetail } from './parcel.model';
import { PercelService } from './parcel.service';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css']
})
export class ParcelComponent implements OnInit {

  constructor(private parcelService: PercelService, private adminService: AdminService) { }
  parcelList: ParcelModel[] = []
  parcelDetail: ParcelModelDetail[] = []

  isVisiblePopup: boolean = false
  popupTitle: string = 'Thêm mới'

  parcelModel!: ParcelModel;

  ngOnInit(): void {
    this.parcelService.getListPercel().subscribe(data => this.parcelList = data!, err => console.log(err))
    this.getListTypeBill()
    this.getListProduct()
    this.getListParcel()
    this.getListTypeProduct()
    this.getListTypePacket()
    this.getListParcel()
    this.getListWareHouse()
  }

  showModal(code_parcel: string) {
    this.isVisiblePopup = true
    this.parcelModel = this.parcelList.filter(p => p.parcel_code == code_parcel)[0]
    this.parcelService.getListParcelDetail(code_parcel).subscribe(data => this.parcelDetail = data!, err => console.log(err))
  }

  onSubmitDetailParcel(event: any) {
    console.log(event)
  }


  // onSaving(e: any) {
  //   console.log(e);
  //   const change = e.changes[0]
  //   console.log(change);
  //   if (change) {
  //     e.cancel = true
  //     e.promise = this.processSaving(change)
  //   }
  // }

  // async processSaving(change: Change<DeviceInfo>) {
  //   this.isLoading = true
  //   try {
  //     await this.parcelService.saveChange(change)
  //     this.editRowKey = 0
  //     this.changes = []
  //   } finally {
  //     this.isLoading = false
  //   }
  // }

  // onSelectionChanged(
  //   selectedRowKeys: any,
  //   cellInfo: any,
  //   dropDownBoxComponent: any,
  // ) {
  //   cellInfo.setValue(selectedRowKeys[0])
  //   console.log(cellInfo);
  //   console.log(cellInfo.value);
  //   if (selectedRowKeys.length > 0) {
  //     dropDownBoxComponent.close()
  //   }
  // }

  listTypeBill: any = []
  getListTypeBill() {
    this.adminService.getListTypeBill().subscribe((data: any) => {
      this.listTypeBill = data
      //console.log("listTypeBill",data)
    })
  }


  listProduct: any = []
  getListProduct() {
    this.adminService.getListProduct().subscribe((data: any) => {
      this.listProduct = data
      //console.log("listProduct",data)
    })
  }



  listTypeProduct: any = []
  getListTypeProduct() {
    this.adminService.getListTypeProduct().subscribe((data: any) => {
      this.listTypeProduct = data
      //console.log("listTypeProduct",data)
    })
  }


  listTypePacket: any = []
  getListTypePacket() {
    this.adminService.getListTypePacket().subscribe((data: any) => {
      this.listTypePacket = data
      //console.log("listTypePacket",data)
    })
  }




  listParcel: any = []
  getListParcel() {
    this.adminService.getListParcel().subscribe((data: any) => {
      this.listParcel = data
      //console.log("listParcel",data)
    })
  }



  listWareHouse: any = []
  getListWareHouse() {
    this.adminService.getListWareHouse().subscribe((data: any) => {
      this.listWareHouse = data
      //console.log("listWareHouse",data)
    })
  }
}
