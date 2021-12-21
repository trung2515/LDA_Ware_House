export class QtyOnBaggingMachine {
  id: number
  ca: string
  date: Date
  product_name: string
  bag_type: string
  bagging_machine: string
  display_bagM: string
  username: string
  note: string
}
export class FilterModel {
  objDate: { startDate: number, endDate: number }
  inputValue: string
}

export class QtyAlumin50KG {
  ca: string
  date: Date
  product_name: string
  bag_type: string
  product_type: string
  card_type: string
  dv_dong: string
  parcel: string
  quantity: number
  weight: number
  warehouse: string
  username: string
  constructor(data: any){
    this.weight = this.quantity * 50
  }
}
