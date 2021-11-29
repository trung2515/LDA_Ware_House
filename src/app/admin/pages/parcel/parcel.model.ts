import { ParcelDetailInfo, ParcelInfo } from 'src/app/core/models/model.pb'

export class ParcelModel {
  parcel_code: string
  parcel_name: string
  created_date: string
  created_by: string
  constructor(data: ParcelInfo) {
    this.parcel_code = data.codeParcel || ''
    this.parcel_name = data.codeParcel || ''
    this.created_date = ''
    this.created_by = ''
  }
}

export class ParcelModelDetail {
  id: number
  product_code: string
  product_type: string
  bill_type: string
  quantity: number
  status: string
  parcel_code: string
  packet_type : string
  constructor(data: ParcelDetailInfo) {
    this.id = data.idParcelDetail || 0
    this.parcel_code = data.codeParcel || ''
    this.product_code = data.codeProduct || ''
    this.product_type = data.nameTypeProduct || ''
    this.bill_type = data.nameTypePacket || ''
    this.quantity = parseInt(data.quantity!) || 0
    this.packet_type = data.nameTypePacket || ''
    this.status = parseInt(data.quantity!) == 3000 ? 'Hoàn thành' : 'Đang xử lý'
  }
}
