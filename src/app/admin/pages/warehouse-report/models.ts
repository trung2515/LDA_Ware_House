import { CardDetailInfo, ConfirmProductionDetail } from './../../../core/models/model.pb';
export class QtyOnBaggingMachine {
  id: number
  ca: string
  date: string
  product_name: string
  bag_type: string
  bagging_machine: string
  display_bagM: string
  username: string
  note: string
  constructor(data: ConfirmProductionDetail) {
    this.id = data.idShiftDetail || 0
    this.ca = data.nameShift || ''
    this.date = data.date || ''
    this.product_name = data.nameProduct || ''
    this.bag_type = data.nameTypePacket || ''
    this.bagging_machine = data.codeEquipment || ''
    this.display_bagM = data.quantity.toString() || ''
    this.username = data.nameCreatedPerson || ''
    this.note = data.optionName || ''

  }
}
export class FilterModel {
  objDate: { startDate: number, endDate: number }
  inputValue: string
}

export class QtyAlumin50KG {
  ca: string
  date: string
  product_name: string
  bag_type: string
  product_type: string
  card_type: string
  dv_dong: string
  parcel: string
  quantity: string
  weight: string
  warehouse: string
  username: string
  constructor(data: CardDetailInfo) {
    this.weight = data.weight
    this.ca = data.nameShift
    this.date = data.createdDate
    this.quantity = data.quantity
    this.dv_dong = data.namePartner
    this.parcel = data.codeParcel
    this.warehouse = data.nameWareHouse
    this.username = data.createdPerson
    this.card_type = data.nameTypeBill
  }
}
