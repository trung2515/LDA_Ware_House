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
      data.codeParcel ||
      data.nameTypeBill ||
      data.namePackingUnit ||
      ''
    this.value =
      data.codeProduct ||
      data.codeTypePacket ||
      data.idTransportationUnit ||
      data.codeWareHouse ||
      data.codePartner ||
      data.objectCode ||
      data.idTypeProduct ||
      data.codeTypeBill||
      data.codeParcel ||
      data.codePackingUnit ||
      ''
  }
}
