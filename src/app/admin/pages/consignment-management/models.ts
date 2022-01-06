import { ThisReceiver } from "@angular/compiler";
import { ParcelInfo, ParcelDetailInfo } from "src/app/core/models/model.pb";


export class ParcelDetailModel {
  code_product: string
  code_product_type: number
  code_bag: string
  quantity: string
  status: string
  constructor(data: ParcelDetailInfo) {
    this.code_product = data.codeProduct
    this.code_bag = data.codeTypePacket
    this.code_product_type = data.idTypeProduct
    this.quantity = data.quantity
    this.status = parseInt(data.quantity) > 0 ? 'Đang sản xuất' : 'Mới'
  }
}
export class ParcelModel {
  id: number = 0;
  name: string = '';
  date: string = ''
  createdBy: number = 0
  createdPerson: string = ''
  products: ParcelDetailModel[] = []
  quantity: number = 0
  constructor(data: ParcelInfo = new ParcelInfo()) {
    this.id = data.idParcel || 0
    this.name = data.codeParcel || ''
    this.date = data.createdDate || ''
    this.createdPerson = data.nameCreatedPerson || ''
    this.createdBy = data.createdPerson
    this.quantity = 0
  }
}

export class OptionModel {
  name: string
  value: string
  constructor(data: any) {
    this.name =
      data.nameProduct ||
      data.nameTypePacket ||
      data.nameTransportationUnit ||
      data.nameWareHouse ||
      data.namePartner ||
      data.objectName ||
      data.idTypeProduct.toString() || '' ||
      ''
    this.value =
      data.codeProduct ||
      data.codeTypePacket ||
      data.idTransportationUnit ||
      data.codeWareHouse ||
      data.codePartner ||
      data.objectName ||
      data.idTypeProduct ||
      ''
  }
}


export class InputProductModel {
  name: string = 'Alumin 1 tấn'
  type: string = '1'
  type_bag: string = 'Đáy liền'
  quantity: number = 1000
  hasProduced: number = 0
  status: string = 'Mới'
}

