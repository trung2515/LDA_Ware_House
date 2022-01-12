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
      data.codeParcel ||
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
