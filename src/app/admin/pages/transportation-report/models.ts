import { ThrowStmt } from '@angular/compiler'
import { CardDetailInfo, QRCodeInfo, TransportInfo } from 'src/app/core/models/model.pb'
import Utils from 'src/app/_lib/utils'
import { threadId } from 'worker_threads'

export class TransportationReportModel {
  shift: string = ''
  date: string = ''
  product_name: string = ''
  product_type: number = 0
  bag_type: string = ''
  work: string = ''
  loading_warehouse: string = ''
  unloading_equipment: string = ''
  loading_equipment: string = ''
  unloading_warehouse: string = ''
  bag_number: number = 0
  ton_number: number = 0
  cdo: number = 0
  trips_number: number = 0
  user: string = ''
  sl_by: string = ''
  time: string
  dv_boc: string = ''
  dv_do: string = ''
  seriIn: string
  seriOut: string
  codeTransport: string = ''
  shift_by_date: string = ''

  constructor(data: TransportInfo) {
    this.product_name = data.nameProduct
    this.product_type = data.idTypeProduct
    this.bag_type = data.codeTypePacket
    this.work = data.codeWork
    this.loading_warehouse = data.codeWareHouseload || ''
    this.unloading_equipment = data.codeEquipmentUnLoad || ''
    this.loading_equipment = data.codeEquipmentLoad || ''
    this.date = Utils.formatDateV1(new Date(data.createddate))
    this.trips_number = data.countTrip
    this.unloading_warehouse = data.codeWareHouseUnload
    this.cdo = data.distance
    this.bag_number = data.quantity
    this.user = data.nameCreatedPerson
    this.ton_number = data.weight
    this.shift = Utils.convertTimeToShift(data.createddate)
    this.time = data.createddate
    this.dv_boc = data.dvBoc || ''
    this.dv_do = data.dvDo || ''
    this.seriIn = data.seriIn.toString() || ''
    this.seriOut = data.seriOut.toString() || ''
    this.codeTransport = data.code
    this.shift_by_date = Utils.convertTimeToShift(data.createddate) + ' ' + Utils.formatDateV1(new Date(data.createddate))
  }
}


export class DetailTransportInfo {
  product_name: string
  product_type: string
  seri: number
  user: string
  code: string
  time: string
  constructor(data: QRCodeInfo) {
    this.product_name = data.nameProduct
    this.product_type = data.idTypeProduct.toString() || ''
    this.seri = data.seri
    this.user = data.nameUserIn
    this.code = data.code
    this.time = (data.code.includes('N') || data.code == 'VCLK') ? data.timeIn : data.timeOut
  }
}
