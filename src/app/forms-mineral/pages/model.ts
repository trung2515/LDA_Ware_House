import { CardDetailInfo, CardDetailResponse, ProductInfo, ProductResponse, TransportInfo, TypePacketInfo, TypeProductInfo } from "src/app/core/models/model.pb";
import Utils from "src/app/_lib/utils";

export class ItemModel {
  name: string = '';
  index: number = 0;
  action: string = '';
}
export interface ListShift {
  shift: string;
  name: string;
}
export class DataTableMinuteExchange {
  billType: string
  product: string;
  type: string;
  packaging: string;
  lot: string;
  seri: number;
  quantity: number;
  user: string;
  shift: string;
  startDate: Date;
  mass: number;
  wareHouse: string;

  constructor(data: CardDetailInfo) {
    this.billType = data.codeTypeBill
    this.product = data.nameProduct;
    this.type = data.idTypeProduct.toString();
    this.packaging = data.nameTypePacket;
    this.lot = data.codeParcel;
    this.quantity = Number(data.quantity);
    this.user = data.createdPerson;
    this.shift = data.nameShift;
    this.seri = 123;
    this.startDate = new Date(data.createdDate);
    this.mass = Number(data.weight);
    this.wareHouse = data.nameWareHouse;
  }
}
export class DataTableMinuteTransport {

  product: string;
  type: string;
  packaging: string;
  seri: string;
  quantity: number;
  shift: string;
  startDate: Date;
  mass: number;
  task: string;
  taskType: string;
  loadWareHouse: string;
  unLoadWarehouse: string;
  loadTool: string;
  unLoadTool: string;
  distance: number;
  errorCause: string;
  note: string;
  constructor(data: TransportInfo) {
    this.task = data.nameWork
    this.taskType = data.codeWork
    this.product = data.nameProduct;
    this.type = data.idTypeProduct.toString();
    this.packaging = data.nameTypePacket;
    this.quantity = Number(data.quantity);
    this.loadWareHouse = data.nameWareHouseLoad
    this.unLoadWarehouse = data.codeWareHouseUnload
    this.loadTool = data.nameEquipmentLoad
    this.unLoadTool = data.nameEquipmentUnLoad
    this.shift = Utils.convertTimeToShift(data.createddate)
    this.seri = data.seriIn.toString() || '';
    this.distance = data.distance;
    this.startDate = new Date(data.createddate);
    this.mass = Number(data.weight);
    this.note = `${data.codeProduct}-${data.idTypeProduct}-${data.codeTypePacket}`

  }
}
export class DataTableMinutePackagingError {
  product: string
  productType: string
  lot: string;
  seri: number;
  errorCause: string;
  packagingType: string;
  note: string
  constructor(data: any) {
    this.product = data.nameProduct;
    this.productType = data.idTypeProduct.toString() || '';
    this.packagingType = data.nameTypePacket;
    this.lot = data.codeParcel;
    this.seri = data.seri;
    this.errorCause = data.nameReason;
    this.note = `${data.codeProduct}-${data.idTypeProduct}-${data.codeTypePacket}`
  }
}
export interface dataMinutesSuggest {
  product: string,
  productType: number | '',
  packaging: string,
  decision: string,
  unit: string,
  uses: string,
  quantity: number | '',
  quantityConfirm: number | '',
  quantityBill: number | '',
  request: string
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
export class ListProduct {
  name: string;
  id: number;
  constructor(data: ProductInfo) {
    this.name = data.nameProduct;
    this.id = data.idProduct

  }
}
export class ListProductType {
  name: string;
  id: number;
  constructor(data: TypeProductInfo) {
    this.name = data.idTypeProduct.toString() || '';
    this.id = data.idTypeProduct

  }
}
export class ListPackaging {
  name: string;
  constructor(data: TypePacketInfo) {
    this.name = data.nameTypePacket;
  }
}

