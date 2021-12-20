import { ThisReceiver } from "@angular/compiler";
import { ParcelInfo, ParcelDetailInfo } from "src/app/core/models/model.pb";

export class ParcelDetailModel {
  code: string
  name: string
  type: string
  type_bag: string
  quantity: string
  status: string
  constructor(data: ParcelDetailInfo){
    this.code = data.codeProduct
    this.name = data.nameProduct
    this.type = data.nameTypeProduct
    this.type_bag = data.nameTypePacket
    this.quantity = data.quantity
  }
}
export class ParcelModel {
  id: number = 0;
  name: string = '';
  date: string = ''
  createdBy: string = ''
  products : ParcelDetailModel[] = []
  constructor(data: ParcelInfo){
    this.id = data.idParcel
    this.name = data.codeParcel
    this.date = data.createdDate
    this.createdBy = data.nameCreatedPerson
  }
}

export class InputProductModel {
  name: string = 'Alumin 1 tấn'
  type:string =  '1'
  type_bag:string = 'Đáy liền'
  quantity:number = 1000
  hasProduced:number = 0
  status:string = 'Mới'
}

