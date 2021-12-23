import { OrderInfo, QRCodeInfo } from 'src/app/core/models/model.pb'

export class OrderModel {
  idCardDriver: string
  nameDriver: string
  romoocNumber: string
  vehicleNumber: string
  weightAllow: number
  weightRegister: number
  product: string
  type_packet: string
  quantity: number
  lop1: number
  lop2: number
  dvvc: string
  orderCode: string
  timecreated: string
  timelasted: string
  weight_actual: string
  weight_estimate: string
  quantity_actual: number
  status: string
  constructor(data: OrderInfo) {
    this.idCardDriver = data.identityDriver || ''
    this.nameDriver = data.nameDriver || ''
    this.romoocNumber = data.roMooc || ''
    this.vehicleNumber = data.vehicleNumber || ''
    this.weightAllow = data.weightAllow || 0
    this.weightRegister = data.weightRegistration || 0
    this.product = data.nameProduct || ''
    this.type_packet = data.nameTypePacket || ''
    this.lop1 = data.class1 || 0
    this.lop2 = data.class2 || 0
    // this.dvvc = data.idTransportationUnit || ''
    this.dvvc = data.nameTransportationUnit
    this.quantity = data.quantity || 0
    this.orderCode = data.codeOrder || ''
    this.timecreated = data.timecreated
    this.timelasted = data.timelastest
    this.weight_actual = data.weightActual.toString()
    this.quantity_actual = data.quantityActual
    this.weight_estimate = data.weightEstimate.toString()
    this.status = data.status == 0 ? 'Đang xử lý' : 'Hoàn thành' || ''
  }
}

export class OrderDetailModel {
  qrcode: string
  seri: number
  time: string
  constructor(data: QRCodeInfo) {
    this.qrcode = data.code
    this.seri = data.seri
    this.time = data.timeOut
  }
}
