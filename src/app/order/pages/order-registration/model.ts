export class OptionModel {
  name: string;
  code: string;
  constructor(data: any) {
    this.name =
      data.nameProduct ||
      data.nameTypePacket ||
      data.nameTransportationUnit ||
      data.nameWareHouse ||
      data.namePartner ||
      data.objectName ||
      data.nameTypeBill ||
      data.namePackingUnit ||
      data.codeParcel ||
      data.name ||
      'Loại ' + data.idTypeProduct ||
      '';
    this.code =
      // data.codeProduct ||
      data.nameProduct ||
      data.nameTypePacket ||
      data.codeTypePacket ||
      data.nameTransportationUnit ||
      // data.idTransportationUnit ||
      // data.codeWareHouse ||
      data.codePartner ||
      data.objectCode ||
      data.idTypeProduct ||
      data.codeTypeBill ||
      data.namePackingUnit ||
      // data.codePackingUnit ||
      data.codeParcel ||
      data.code ||
      '';
  }
}
export class DriverModel {
  name: string;
  value: string;
  constructor(data: any) {
    this.name = data.name
    this.value = data.cccd
  }
}
export class CMNDModel {
  name: string;
  value: string;
  nameOwn: string
  constructor(data: any) {
    this.name = data.cccd
    this.value = data.cccd
    this.nameOwn =  data.name
  }
}
export class RoMooc {
  name: string;
  value: string;
  constructor(d: any) {
    this.value = d.bsx;
    this.name = d.bsx;
  }
}
export class NumberPlateModel {
  name: string;
  value: string;
  constructor(d: any) {
    this.value = d.bsx;
    this.name = d.bsx;
  }
}
export class DVVC {
  name: string;
  value: string;
  constructor(d: any) {
    this.value = d.name;
    this.name = d.name;
  }
}
export class DriverInfoModel {
  name: string;
  cccd: string;
}

export class ShippingUnitModel {
  name: string
  code: string
  value: string
  constructor(data:any) {
    this.name = data.name
    this.code = data.name
    this.value = data.name
  }
}
