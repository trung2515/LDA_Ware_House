import { CardDetailInfo } from "src/app/core/models/model.pb"
import Utils from "src/app/_lib/utils"

export class StatisticModel {
  bag: number = 0
  ton: number = 0
}
export class ProductionStatisticalModel {
  shiftID: string = ''
  date: string = '21/10/2021'
  name: string = 'Alumin 1 tấn'
  type_product: number = 1
  type_bag: string = ''
  name_kttc: string = ''
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
  typeIn: string = ''
  typeOut: string = ''
  index: string = '0'
  constructor(data: CardDetailInfo) {
    this.name = data.nameProduct
    this.date = Utils.formatDateV1(new Date(data.createdDate))
    this.consumer = data.namePartner
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
    this.consumer = (!data.codeTypeBill.includes('N') ? data.nameCustomer : '') || ''
    this.consumer_detail = (!data.codeTypeBill.includes('N') ? data.customerInternal : '') || ''
    this.typeIn = data.codeTypeBill.includes('N') ? '2. Nhập' : (data.codeTypeBill.includes('X') ? '3. Xuất' : data.codeTypeBill.includes('D') ? '1. Tồn đầu' : data.codeTypeBill.includes('C') ? '4. Tồn cuối' : '')
    this.index = data.codeTypeBill.includes('N') ? '2' : (data.codeTypeBill.includes('X') ? '3' : (data.codeTypeBill.includes('TD') ? '1' : '4'))
  }
}
