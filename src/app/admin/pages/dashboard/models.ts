import { QRCodeInfo, ReportInventoryInfo } from "src/app/core/models/model.pb";
import Utils from "src/app/_lib/utils";

export class Product {
  id: string;
  name: string;
  date: string;
  packaging_qty: number;
  amountConsumption: number;
  inventory_qty: number;
  machines_packaging: {
    palang: number;
    cautientuan: number;
    xenangvuontre: number;
  };
  machines_consumption: {
    palang: number;
    cautientuan: number;
    xenangvuontre: number;
  };

  constructor(data: QRCodeInfo){
    this.date = Utils.formatDateV1(new Date(data.timeIn))
    this.name = data.nameProduct
  }
}
export class BarCharDateModel {
  day: string;
  tons: number;
  constructor(data: Product){
    this.day = data.date
    this.tons = data.packaging_qty
  }
}
export class TypeMachineModel {
  value: string;
  name: string;
}
export class InventoryFLMonthModel {
  name: string;
  total: string;
  store: string;
  constructor(data: ReportInventoryInfo){
    this.name = data.nameProduct
    this.total = data.quantity
    this.store = data.nameWareHouse
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
