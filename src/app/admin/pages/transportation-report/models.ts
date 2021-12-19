import { TransportInfo } from 'src/app/core/models/model.pb'
import Utils from 'src/app/_lib/utils'

export class TransportationReportModel {
  shift: string = ''
  date: string = ''
  product_name: string = ''
  product_type: number = 0
  bag_type: string = ''
  work: string = ''
  lau_warehouse: string = ''
  unloading_equipment: string = ''
  loading_equipment: string = ''
  unloading_warehouse: string = ''
  bag_number: number = 0
  ton_number: number = 0
  cdo: number = 0
  trips_number: number = 0
  user: string = ''
  sl_by: string = ''
  constructor(data: TransportInfo) {
    this.product_name = data.nameProduct
    this.product_type = data.idTypeProduct
    this.bag_type = data.codeTypePacket
    this.work = data.codeWork
    this.lau_warehouse = data.nameWareHouseUnLoad
    this.unloading_equipment = data.codeEquipmentUnLoad
    this.loading_equipment = data.codeEquipmentLoad
    this.date = Utils.formatDate(new Date(data.createddate))
    this.trips_number = data.countTrip
    this.lau_warehouse = data.codeWareHouseload
    this.unloading_warehouse = data.codeWareHouseUnload
    this.cdo = data.distance
    this.bag_number = data.quantity
    this.user = data.nameCreatedPerson
    this.ton_number = data.weight
    this.shift = Utils.convertTimeToShift(data.createddate)
  }
}
