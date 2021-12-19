import { Component, OnInit } from '@angular/core'
import { ParcelInfo } from 'src/app/core/models/model.pb'
import { AdminService } from 'src/app/core/services/admin.service'
import { ParcelModel, ParcelModelDetail } from './parcel.model'
import { PercelService } from './parcel.service'

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css'],
})
export class ParcelComponent implements OnInit {
  constructor(
    private parcelService: PercelService,
    private adminService: AdminService,
  ) {}
  parcelList: ParcelModel[] = []
  parcelDetail: ParcelModelDetail[] = []

  popupVisible: boolean = false
  popupTitle: string = 'Thêm mới'

  codeParcelActive!: string
  saveButtonOptions: any
  closeButtonOptions: any
  ngOnInit(): void {
    // this.parcelService.getListPercel().subscribe(
    //   (data) => (this.parcelList = data!),
    //   (err) => console.log(err),
    // )
    this.saveButtonOptions = {
      text: 'Lưu thay đổi',
      onClick(e: any) {
        console.log(e)
      },
    }
    this.closeButtonOptions = {
      text: 'Đóng',
      onClick(e: any) {
        console.log(e);
        this.popupVisible = false
      },
    }
  }
  showModal(code_parcel: string) {
    this.popupVisible = true
    this.codeParcelActive = code_parcel
  }
  onSubmitDetailParcel(event: any) {
    console.log(event)
  }
}
