import {
  ConfirmProduction1000,
  ConfirmProductionDetail,
  CodePacketInfo
} from './../../../core/models/model.pb';
import { ConfirmProductionResponse } from 'src/app/core/models/model.pb';

export class ProductConfirm {
  codeEquipment: string;
  codePackingUnit: string;
  idParcel: string;
  codeProduct: string;
  codeTypeBill: string;
  codeTypePacket: string;
  codeWareHouse: string;
  createdPerson: string | number;
  date: string;
  idShift: number;
  idShiftDetail: number;
  idTypeProduct: number;
  creator: string;
  namePackingUnit: string;
  nameProduct: string;
  nameShift: string;
  nameTypeBill: string;
  typePacket: string;
  typeProduct: string;
  nameWareHouse: string;
  option: string;
  quantity: number;
  constructor(data: ConfirmProductionDetail) {
    this.codeEquipment = data.codeEquipment;
    this.codePackingUnit = data.codePackingUnit;
    this.idParcel = data.codeParcel;
    this.codeProduct = data.codeProduct;
    this.codeTypeBill = data.codeTypeBill;
    this.codeTypePacket = data.codeTypePacket;
    this.codeWareHouse = data.codeWareHouse;
    this.createdPerson = data.createdPerson;
    this.date = data.date;
    this.idShift = data.idShift;
    this.idShiftDetail = data.idShiftDetail;
    this.idTypeProduct = data.idTypeProduct;
    this.creator = data.nameCreatedPerson;
    this.namePackingUnit = data.namePackingUnit;
    this.nameProduct = data.nameProduct;
    this.nameShift = data.nameShift;
    this.nameTypeBill = data.nameTypeBill;
    this.typePacket = data.nameTypePacket;
    this.typeProduct = data.nameTypeProduct;
    this.nameWareHouse = data.nameWareHouse;
    this.option = data.optionName;
    this.quantity = data.quantity;
  }
}

export class OptionDetail {
  idShiftDetail: number
  option: string;
  idParcel: number;
  warehouse: string;
  packagingUnit: string;
  creator: string;
  typeProduct: string;
  nameProduct: string;
  typePacket: string;
  machine_list: MachineModel[];
}
export class MachineModel {
  code: string;
  qty: number | 0;
}
export class InputOptionModel {
  label: string;
  formControlName: string;
}
