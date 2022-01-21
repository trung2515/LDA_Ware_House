import { ShiftDetailInfo, ShiftInfo } from 'src/app/core/models/model.pb';
import { ClassificationTypeNames } from 'typescript';

export class Appointment {
  id: number;
  text: string;
  shift: number;
  startDate: Date;
  endDate: Date;
  description: string;
  idDetail: number;
  shiftDetail: ShiftDetail[];
  constructor(data: ShiftDetailInfo) {
    this.text = data.nameShift + ' ' + data.nameCreatedPerson;
    this.startDate = new Date(data.date);
    this.endDate = new Date(data.date);
    this.shift = parseInt(
      data.nameShift
        .toLowerCase()
        .replace('ca', '')
        .trim()
    );
    this.idDetail = data.idShiftDetail;
    this.id = data.idShift;
  }
}

export interface Resource {
  text: string;
  id: number;
  color: string;
}
export class ShiftDetail {
  id: number;
  option: string;
  type: string;
  product: string;
  productRange: number;
  packaging: string;
  lot: string;
  unit: string;
  wareHouse: string;
  machines_packaging: string;
  idMaster: number;
  shift: number;
  date: string;
  nameShift: string;
  type_bag: string;
  constructor(data: ShiftDetailInfo) {
    this.id = data.idShiftDetail;
    this.idMaster = data.idShift;
    this.option = data.optionName;
    this.type = data.codeTypeBill;
    this.type_bag = data.codeTypePacket;
    this.product = data.codeProduct;
    this.productRange = data.idTypeProduct;
    this.lot = data.codeParcel;
    this.unit = data.codePackingUnit;
    this.wareHouse = data.codeWareHouse;
    this.shift = data.idShift;
    this.date = data.date;
    this.nameShift = data.nameShift;
  }
}
export interface ShiftMaster {
  id: number;
  name: string;
  shift: number;
  startDate: Date;
  endDate: Date;
  description: string;
}
export interface Product {
  name: string;
}

export interface Option {
  value: number;
  name: string;
}
export interface Lot {
  name: number;
}
export interface ListShift {
  shift: number;
  name: string;
}
export class optionApoiment {
  // optionName : string;
  codeTypeBill: string;
  nameProduct: string;
  nameTypeProduct: string;
  nameTypePacket: string;
  codeParcel: number;
  namePackingUnit: string;
  nameWareHouse: string;
  constructor(data: any) {
    // this.optionName = data.option
    this.codeTypeBill = data.type;
    this.nameProduct = data.product;
    this.nameTypeProduct = data.productRange;
    this.nameTypePacket = data.packaging;
    this.codeParcel = data.lot;
    this.namePackingUnit = data.unit;
    this.nameWareHouse = data.wareHouse;
  }
}

export class OptionModel {
  name: string;
  value: string;
  constructor(data: any) {
    this.name =
      data.nameProduct ||
      data.nameTypePacket ||
      data.nameTransportationUnit ||
      data.nameWareHouse ||
      data.namePartner ||
      data.objectName ||
      data.idTypeProduct ||
      data.nameTypeBill ||
      data.namePackingUnit ||
      'Lô ' + data.codeParcel ||
      '';
    this.value =
      data.codeProduct ||
      data.codeTypePacket ||
      data.idTransportationUnit ||
      data.codeWareHouse ||
      data.codePartner ||
      data.objectCode ||
      data.idTypeProduct ||
      data.codeTypeBill ||
      data.codePackingUnit ||
      data.codeParcel ||
      '';
  }
}
