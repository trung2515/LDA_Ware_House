import { CardDetailInfo } from "src/app/core/models/model.pb"
import Utils from "src/app/_lib/utils"

export class StatisticModel  {
  bag: number = 0
  ton: number = 0
}
export class ProductionStatisticalModel {
  shiftID: string = ''
  date: string = '21/10/2021'
  name: string =  'Alumin 1 tấn'
  type_product: number =  1
  type_bag: string = ''
  name_kttc: string = 'Tên KTTC'
  bag_unit: string = 'Nung'
  mineral_type: string = 'N'
  ballot_type: string = 'NDM'//loại phiếu
  consumer: string = 'Nội địa'
  consumer_detail: string = 'Miccro'
  trips_number: number | '' = 10
  consignments_number: string = '184'
  bag_number: number = 0
  ton_number: number = 0
  warehouse: string = 'Kho TT'
  reason: string = ''
  user: string = 'HV Biên'
  note: string = ''
  time: string = ''
  constructor(data: CardDetailInfo){
    this.name = data.nameProduct
    this.date = data.createdDate
    this.consumer = data.namePartner
    this.consumer_detail = '' 
    this.warehouse = data.nameWareHouse || ''
    this.trips_number = data.countTrip || 0
    this.user = data.createdPerson || ''
    this.consignments_number = data.codeParcel
    this.type_bag = data.codeTypePacket
    this.bag_number = parseInt(data.quantity) || 0
    this.type_product = data.idTypeProduct || 0
    this.shiftID = data.nameShift || ''
    this.bag_unit = data.namePackingUnit
    this.ballot_type = data.codeTypeBill
    this.ton_number = parseInt(data.quantity) * 1000
    this.reason = data.nameReason || ''
    this.time = data.createdDate
  }
}
