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
}
export class BarCharDateModel {
  day: string;
  tons: number;
}
export class TypeMachineModel {
  value: string;
  name: string;
}
export class InventoryFLMonthModel {
  name: string;
  total: number;
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
