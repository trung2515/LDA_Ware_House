export class OptionModel {
  name: string;
  value: string;
  constructor(data: any) {
    this.name =
      // data.nameProduct ||
      data.nameTypePacket ||
      data.nameTransportationUnit ||
      data.nameWareHouse ||
      data.namePartner ||
      data.objectName ||
      data.nameTypeBill ||
      data.namePackingUnit ||
      data.codeParcel ||
      data.name ||
      'Loại '+data.idTypeProduct ||
      '';
    this.value =
      // data.codeProduct ||
      data.nameTypePacket ||
      // data.codeTypePacket ||
      data.nameTransportationUnit ||
      // data.idTransportationUnit ||
      data.codeWareHouse ||
      data.codePartner ||
      data.objectCode ||
      data.idTypeProduct ||
      // data.idTypeProduct ||
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
  cmnd: string;
  constructor(data:any) {
    this.name= data.name,
    this.cmnd = data.cccd
  }
}
export class RoMooc {
  value: string
  constructor(d:any) {
    this.value = d.bsx
  }
}
