import Utils from 'src/app/_lib/utils';
import { CardDetailInfo } from 'src/app/core/models/model.pb';
export class ErrorModel {
  error: string
  shift: string
  date: string
  product: string
  product_type: string
  bag_type: string
  parcel: string
  seri_number: number
  user: string
  time: string

  constructor(data: CardDetailInfo) {
    this.error = data.nameReason
    this.shift = Utils.convertTimeToShift(data.timereport) || ''
    this.date = Utils.formatDate(new Date(data.timereport)) || ''

    this.product_type = data.nameTypeProduct
    this.bag_type = data.nameTypePacket
    this.parcel = data.codeParcel
    this.seri_number = data.seri
    this.user = data.createdPerson
    this.product = data.nameProduct
    this.time = data.createdDate
  }
}
