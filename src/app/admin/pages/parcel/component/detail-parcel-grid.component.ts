import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { ParcelModelDetail } from '../parcel.model'
import { PercelService } from '../parcel.service'

@Component({
  templateUrl: './detail-parcel-grid.component.html',
  selector: 'detail-parcel-grid',
})
export class DetailParcelGrid implements OnInit, OnChanges {
  @Input() key!: string

  data: ParcelModelDetail[] = []
  constructor(private parcelService: PercelService) {}

  ngOnInit(): void {
    this.getData()
  }

  ngOnChanges(): void {
    this.getData()
  }

  getData() {
    this.parcelService
      .getListParcelDetail(this.key)
      .subscribe((data) => (this.data = data!))
  }
}
