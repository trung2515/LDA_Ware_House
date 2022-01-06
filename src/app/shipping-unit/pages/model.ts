import { PackingUnitInfo, TypeBillInfo } from './../../core/models/model.pb';
import {
  CardDetailInfo,
  ProductInfo,
  ShiftDetailInfo,
  TypePacketInfo,
  TypeProductInfo,
  WareHouseInfo
} from 'src/app/core/models/model.pb';

export class ShiftDetail {
  id: number;
  idShiftDetail: number;
  shift: string;
  startDate: Date;
  endDate: Date;
  description: string;
  idParcel: string;
  ballot_type: string;
  warehouse: string;
  option: string;
  nameProduct: string;
  typeProduct: string;
  typePacket: string;
  packingUnit: string;
  creator: string;

  constructor(data: ShiftDetailInfo) {
    this.id = data.idShift;
    this.idShiftDetail = data.idShiftDetail;
    this.shift = data.nameShift;
    this.startDate = new Date(data.date);
    this.endDate = new Date(data.date);
    this.idParcel = data.codeParcel;
    this.ballot_type = data.nameTypeBill;
    this.warehouse = data.codeWareHouse;
    this.option = data.optionName;
    this.nameProduct = data.nameProduct;
    this.typeProduct = data.nameTypeProduct;
    this.typePacket = data.nameTypePacket;
    this.packingUnit = data.namePackingUnit;
    this.creator = data.nameCreatedPerson;
  }
}
export class CardBag50kg {
  date: string;
  shift: string;
  type_ballot: string;
  packing_unit: string;
  product_name: string;
  type_product: string;
  type_packing: string;
  qty: string;
  parcel: string;
  warehouse: string;
  constructor(data: CardDetailInfo) {
    this.shift = data.nameShift;
    this.type_ballot = data.codeTypeBill;
    this.packing_unit = data.namePackingUnit;
    this.type_packing = data.nameTypePacket;
    this.qty = data.quantity;
    this.parcel = data.codeParcel;
    this.warehouse = data.nameWareHouse;
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

export class Option50Modal {
  name: string;
  code: string;
  constructor(data: any) {
    this.name =
      data.nameTypeBill ||
      data.namePackingUnit ||
      data.nameProduct ||
      data.idTypeProduct ||
      data.nameTypePacket ||
      data.nameWareHouse ||
      '';
    this.code =
      data.codeTypeBill ||
      data.codePackingUnit ||
      data.codeProduct ||
      data.idTypeProduct ||
      data.codeTypePacket ||
      data.codeWareHouse ||
      '';
  }
}

// export class BallotTypeOptionModel {
//   name: string;
//   code: string;
//   constructor(data: TypeBillInfo) {
//     this.name = data.nameTypeBill;
//     this.code = data.codeTypeBill;
//   }
// }
// export class PackingUnitOptionModel {
//   name: string;
//   code: string;
//   constructor(data: PackingUnitInfo) {
//     this.name = data.namePackingUnit;
//     this.code = data.codePackingUnit;
//   }
// }
// export class ProductOptionModel {
//   name: string;
//   code: string;
//   constructor(data: ProductInfo) {
//     this.name = data.nameProduct;
//     this.code = data.codeProduct;
//   }
// }
// export class TypeProductModel {
//   name: string;
//   code: number;
//   constructor(data: TypeProductInfo) {
//     this.name = 'Loại ' + data.idTypeProduct;
//     this.code = data.idTypeProduct;
//   }
// }
// export class TypePacketModel {
//   name: string;
//   code: string;
//   constructor(data: TypePacketInfo) {
//     this.name = data.nameTypePacket;
//     this.code = data.codeTypePacket;
//   }
// }
// export class WareHouseModel {
//   name: string;
//   code: string;
//   constructor(data: WareHouseInfo) {
//     this.name = data.nameWareHouse;
//     this.code = data.codeWareHouse;
//   }
// }

// list 50kg
export class Card50kgDetailModel {
  idCard: number;
  ballot_type: string;
  code_ballot_type: string
  packing_unit: string;
  creator: string;
  warehouse: string;
  codeWarehouse: string;
  product_name: string;
  product_code: string;
  product_type: string;
  code_product_type: string;
  bag_type: string;
  code_bag_type: string;
  parcel: string;
  qty: number;
  weight_num: number;
  shift: string;
  created_at: string;

  constructor(data: CardDetailInfo) {
    this.idCard = data.idCard;
    this.ballot_type = data.nameTypeBill;
    this.code_ballot_type = data.codeTypeBill
    this.packing_unit = data.namePackingUnit;
    this.creator = data.namePerson;
    this.warehouse = data.nameWareHouse;
    this.codeWarehouse = data.codeWareHouse;
    this.product_name = data.nameProduct;
    this.product_code = data.codeProduct;
    this.product_type = data.idTypeProduct + '';
    // this.code_product_type = data.code
    this.bag_type = data.nameTypePacket;
    this.code_bag_type = data.codeTypePacket;
    this.parcel = data.codeParcel;
    this.qty = parseInt(data.quantity);
    this.weight_num = parseInt(data.weight);
    this.shift = data.nameShift;
    this.created_at = data.createdDate;
  }
}
