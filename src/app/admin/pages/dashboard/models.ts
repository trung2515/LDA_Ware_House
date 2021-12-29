import { CardDetailInfo, QRCodeInfo, ReportInventoryInfo } from "src/app/core/models/model.pb";
import Utils from "src/app/_lib/utils";

export class Product {
  id: string;
  name: string;
  date: string;
  packaging_qty: number = 0;
  amountConsumption: number;
  inventory_qty: number = 0;
  machines_packaging: any;
  machines_consumption: any
  code_type_bill: string

  constructor(data: CardDetailInfo) {
    this.date = Utils.formatDateV1(new Date(data.createdDate))
    this.name = data.nameProduct
    this.inventory_qty = parseInt(data.quantity)
    this.code_type_bill = data.codeTypeBill.includes('N') ? 'N' : 'X'
  }
}
export class BarCharDateModel {
  day: string;
  tons: number;
  constructor(data: Product) {
    this.day = data.date
    this.tons = data.packaging_qty
  }
}
export class TransportationEquipment {
  fieldCode: string | number;
  name: string;
}
export class InventoryFLMonthModel {
  name: string;
  total: number = 0;
  type: number;
  constructor(data: ReportInventoryInfo) {
    this.name = data.nameProduct
    this.type = data.idTypeProduct
  }
}
export class FilterControllerModel {
  product_name: string;
  year: string;
  month: string;
  dayAround: {
    startDate: number;
    endDate: number;
  };
}
export class paramChangeModel {
  value: string;
  name: 'product_name' | 'year' | 'month';
}
