import {
  ProductInfo,
  ShiftDetailInfo,
  TypePacketInfo,
  TypeProductInfo,
  WareHouseInfo
} from 'src/app/core/models/model.pb';

export class ShiftDetail {
  id: number;
  idShiftDetail: number
  shift: string;
  startDate: Date;
  endDate: Date;
  description: string;
  idParcel: string
  ballot_type: string
  warehouse: string
  option: string
  nameProduct: string
  typeProduct: string
  typePacket: string
  packingUnit: string
  creator: string

  constructor(data: ShiftDetailInfo) {
    this.id = data.idShift
    this.idShiftDetail = data.idShiftDetail
    this.shift = data.nameShift
    this.startDate = new Date(data.date);
    this.endDate = new Date(data.date);
    this.idParcel = data.codeParcel
    this.ballot_type = data.nameTypeBill
    this.warehouse = data.codeWareHouse
    this.option = data.optionName
    this.nameProduct = data.nameProduct
    this.typeProduct = data.nameTypeProduct
    this.typePacket = data.nameTypePacket
    this.packingUnit = data.namePackingUnit
    this.creator =  data.nameCreatedPerson
  }
}

export class Resource {
  text: string;
  id: number;
  color: string;
}
export class MachinesPackaging {
  machine_a: number;
  machine_b: number;
  machine_c: number;
  machine_d: number;
  machine_e: number;
}

export class ItemModel {
  name: string = '';
  index: number = 0;
  action: string = '';
}
export interface ListShift {
  shift: number;
  name: string;
}
export interface DataTableMinute {
  id: number;
  product: string;
  type: number;
  packaging: string;
  lot: number;
  seri: number;
  quantity: number;
  user: string;
  shift: number;
  startDate: Date;
  quantityPac: number;
  mass: number;
  wareHouse: string;
}

export class ProductOptionModel {
  name: string;
  code: string;
  constructor(data: ProductInfo) {
    this.name = data.nameProduct;
    this.code = data.codeProduct;
  }
}
export class TypeProductModel {
  name: string;
  code: number;
  constructor(data: TypeProductInfo) {
    this.name = data.nameTypeProduct;
    this.code = data.idTypeProduct;
  }
}
export class TypePacketModel {
  name: string;
  code: string;
  constructor(data: TypePacketInfo) {
    this.name = data.nameTypePacket;
    this.code = data.codeTypePacket;
  }
}
export class WareHouseModel {
  name: string;
  code: string;
  constructor(data:WareHouseInfo){
    this.name = data.nameWareHouse
    this.code = data.codeWareHouse
  }
}
