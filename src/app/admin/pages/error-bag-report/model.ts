import { CardDetailInfo } from 'src/app/core/models/model.pb';
export class ErrorModel {
  error: string
  shift: string
  date: string
  product: string
  product_type: string
  bag_type : string
  parcel: string
  seri_number: number
  user: string

  constructor(data: CardDetailInfo){
    this.error = data.nameReason
    this.shift = data.nameShift
    this.date = data.createdDate
    this.product_type = data.nameTypeProduct
    this.bag_type = data.nameTypePacket
    this.parcel = data.codeParcel
    this.seri_number = data.seri
    this.user = data.createdPerson
    this.product = data.nameProduct
  }
}
