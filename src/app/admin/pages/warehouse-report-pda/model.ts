import { ReportInventoryInfo } from "src/app/core/models/model.pb"

export class InventoryModel {
  product_name: string
  product_type: string
  package_type_name: string
  ballot_name: string
  quantity: string
  warehouse: string

  constructor(data: ReportInventoryInfo){
    this.product_name = data.nameProduct
    this.product_type = data.nameTypeProduct
    this.package_type_name = data.nameTypePacket
    this.ballot_name =data.codeParcel
    this.quantity = data.quantity
    this.warehouse = data.nameWareHouse
  }
}
