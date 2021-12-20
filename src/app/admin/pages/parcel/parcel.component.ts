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


    this.getData();
  }

  getData(){
    this.parcelService.getListPercel('2021-01-01', '2021-12-30').subscribe(
      (data) => (this.parcelList = data!.map(d => new ParcelModel(d))),
      (err) => console.log(err),
    )
  }

  showModal(code_parcel: string) {
    this.popupVisible = true
    this.codeParcelActive = code_parcel
  }
  onSubmitDetailParcel(event: any) {
    console.log(event)
  }
}
